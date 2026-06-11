const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const getRawBody = require('raw-body');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const signature = req.headers['stripe-signature'];
  if (!signature) {
    return res.status(400).json({ error: 'Missing Stripe signature header' });
  }

  let event;
  try {
    // Read raw body stream for secure webhook verification
    const rawBody = await getRawBody(req, {
      limit: '1mb',
    });
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    console.log(`Received Stripe Webhook Event: ${event.type}`);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.client_reference_id;
        const customerId = session.customer;
        const subscriptionId = session.subscription;

        if (!userId) {
          console.warn('No user reference ID found in session');
          break;
        }

        console.log(`Setting PRO status for User ID/Email: ${userId}`);

        const updatePayload = {
          is_pro: true,
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          updated_at: new Date().toISOString()
        };

        // Query support matching user's id (UUID) or email address
        const query = userId.includes('@')
          ? supabase.from('profiles').update(updatePayload).eq('email', userId)
          : supabase.from('profiles').update(updatePayload).eq('id', userId);

        const { error } = await query;
        if (error) {
          console.error('Database update error setting PRO:', error);
          throw error;
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const subscriptionId = subscription.id;

        console.log(`Revoking PRO status for subscription ID: ${subscriptionId}`);

        const { error } = await supabase
          .from('profiles')
          .update({
            is_pro: false,
            updated_at: new Date().toISOString()
          })
          .eq('stripe_subscription_id', subscriptionId);

        if (error) {
          console.error('Database update error revoking PRO:', error);
          throw error;
        }
        break;
      }

      default:
        console.log(`Unhandled webhook event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error handling webhook event:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handler;
module.exports.config = {
  api: {
    bodyParser: false,
  },
};
