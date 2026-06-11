-- Create public profiles table to track leads and premium status
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL PRIMARY KEY,
    name TEXT,
    is_pro BOOLEAN DEFAULT FALSE,
    stripe_customer_id TEXT,
    stripe_subscription_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Enable public read-only access (for checking PRO badge states)
CREATE POLICY "Allow public read access" 
ON public.profiles FOR SELECT 
USING (true);

-- Enable public insert access (for low-friction lead capture)
CREATE POLICY "Allow public insert access" 
ON public.profiles FOR INSERT 
WITH CHECK (true);

-- Enable public update access (for users updating their profile names/details)
CREATE POLICY "Allow public update access" 
ON public.profiles FOR UPDATE 
USING (true);
