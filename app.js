// --- Gift Database ---
// Genders: 'male', 'female', 'unisex'
// Occasions: 'birthday', 'anniversary', 'holiday', 'graduation', 'housewarming', 'generic'
const giftDatabase = [
    {
        id: "gt-01",
        name: "Retro Handheld Game Console",
        desc: "Preloaded with classic games. Compact, nostalgic, and perfect for gaming on the go.",
        price: "45.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["funny", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=retro+handheld+game+console&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=retro+handheld+console" }
        ]
    },
    {
        id: "gt-02",
        name: "Smart Reusable Notebook",
        desc: "Digitize handwritten notes to cloud services while offering a classic writing experience.",
        price: "32.00",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "graduation", "holiday", "generic"],
        interests: ["tech", "books"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=rocketbook+smart+reusable+notebook&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=smart+notebook" }
        ]
    },
    {
        id: "gt-03",
        name: "Noise-Cancelling Headphones",
        desc: "Premium active noise cancellation, custom audio tunings, and ultra-comfortable earcups.",
        price: "249.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "graduation", "holiday"],
        interests: ["tech"],
        tones: ["luxury", "practical"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=sony+noise+cancelling+headphones&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=noise+cancelling+headphones" }
        ]
    },
    {
        id: "gt-04",
        name: "Keychron Mechanical Keyboard",
        desc: "Sleek wireless mechanical keyboard with customizable backlights and tactile switches.",
        price: "85.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["practical", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=keychron+mechanical+keyboard&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=custom+mechanical+keyboard" }
        ]
    },
    {
        id: "gb-01",
        name: "Luxurious Leather Bookmark",
        desc: "Custom engraved full-grain leather bookmark with a gold foil holiday imprint.",
        price: "16.00",
        recipients: ["parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["heartfelt", "practical"],
        budget: "budget",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=leather+engraved+bookmark" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=leather+bookmark&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-02",
        name: "Cozy Book Lover's Reading Light",
        desc: "Rechargeable, neck-worn amber reading light that prevents eye strain during late-night reads.",
        price: "19.99",
        recipients: ["partner", "parent", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=neck+reading+light&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-03",
        name: "Premium Book Subscription Box",
        desc: "A curated monthly box delivering a new release book, specialty tea, and custom reading accessories.",
        price: "110.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["books"],
        tones: ["luxury", "heartfelt"],
        budget: "premium",
        sellers: [
            { name: "Cratejoy", url: "https://www.cratejoy.com/search?q=book+box" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=book+gift+box" }
        ]
    },
    {
        id: "gf-01",
        name: "Alpaca Wool Throw Scarf",
        desc: "Handcrafted, ethically sourced wool scarf that offers unparalleled softness and winter warmth.",
        price: "60.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["luxury", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=alpaca+wool+scarf" },
            { name: "Nordstrom", url: "https://www.nordstrom.com/sr?keyword=wool+scarf" }
        ]
    },
    {
        id: "gf-02",
        name: "Designer Leather Minimalist Wallet",
        desc: "Sleek cardholder wallet crafted from premium full-grain Italian leather.",
        price: "75.00",
        recipients: ["partner", "colleague", "friend"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "graduation", "holiday"],
        interests: ["fashion"],
        tones: ["luxury", "practical"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=minimalist+leather+wallet&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=handmade+leather+wallet" }
        ]
    },
    {
        id: "gf-03",
        name: "Novelty Cozy Socks Pack",
        desc: "A pack of 5 ridiculously soft custom socks featuring whimsical sketches and winter patterns.",
        price: "14.99",
        recipients: ["child", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["funny"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=funny+socks&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=cozy+novelty+socks" }
        ]
    },
    {
        id: "gc-01",
        name: "Cold Brew Maker & Carafe",
        desc: "Heavy-duty borosilicate glass coffee maker that brews smooth, low-acid cold brew right at home.",
        price: "34.00",
        recipients: ["partner", "parent", "colleague", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cold+brew+coffee+maker&tag=presentpfct-20" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=cold+brew+maker" }
        ]
    },
    {
        id: "gc-02",
        name: "Hot Sauce Making Kit",
        desc: "Complete DIY kit with heirloom peppers, custom bottles, and gourmet spices to craft unique hot sauces.",
        price: "39.95",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["funny", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=hot+sauce+kit" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=diy+hot+sauce+kit&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-03",
        name: "Signature Cast Iron Dutch Oven",
        desc: "Enameled cast iron masterpiece for baking bread, simmering stews, and roasting savory dinners.",
        price: "155.00",
        recipients: ["partner", "parent"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "anniversary", "housewarming", "holiday"],
        interests: ["cooking"],
        tones: ["luxury", "practical"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=lodge+cast+iron+dutch+oven&tag=presentpfct-20" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=dutch+oven" }
        ]
    },
    {
        id: "go-01",
        name: "Double-Nest Camping Hammock",
        desc: "Lightweight, parachute nylon camping hammock that fits easily into a compact travel pack.",
        price: "50.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=camping+hammock+double&tag=presentpfct-20" },
            { name: "REI", url: "https://www.rei.com/search?q=hammock" }
        ]
    },
    {
        id: "go-02",
        name: "Gourmet S'mores Campfire Kit",
        desc: "Includes artisanal graham crackers, premium dark chocolates, and handmade marshmallows.",
        price: "22.50",
        recipients: ["child", "friend", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "cooking"],
        tones: ["heartfelt", "funny"],
        budget: "budget",
        sellers: [
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=smores+kit" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=smores+gift+box" }
        ]
    },
    {
        id: "go-03",
        name: "Waterproof Solar Powered Charger",
        desc: "Rugged, solar-assisted external power bank for charging smartphones during outdoor adventures.",
        price: "42.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=solar+charger+waterproof&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-01",
        name: "Organic Essential Oil Diffuser",
        desc: "Whisper-quiet ceramic ultrasonic diffuser with ambient wood grain finish and soft night lights.",
        price: "35.00",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=ceramic+essential+oil+diffuser&tag=presentpfct-20" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=oil+diffuser" }
        ]
    },
    {
        id: "gw-02",
        name: "Luxurious Weighted Blanket",
        desc: "Offers soothing sensory pressure to induce deeper sleep and relieve anxiety after long days.",
        price: "79.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=weighted+blanket&tag=presentpfct-20" },
            { name: "Target", url: "https://www.target.com/s?searchTerm=weighted+blanket" }
        ]
    },
    {
        id: "gw-03",
        name: "Gourmet Organic Tea Collection",
        desc: "Beautiful wooden box filled with 48 premium tea bags sourced from organic farms worldwide.",
        price: "24.95",
        recipients: ["parent", "colleague", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness", "cooking"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=organic+tea+gift+box&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=herbal+tea+gift+set" }
        ]
    },
    // ========== TECH & GAMING (12 new items) ==========
    {
        id: "gt-05",
        name: "Smart LED Strip Lights Kit",
        desc: "WiFi-enabled RGBIC LED strips with music sync, voice control via Alexa, and 16 million color options for immersive room ambiance.",
        price: "22.99",
        recipients: ["child", "friend", "partner"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "housewarming", "generic"],
        interests: ["tech", "home"],
        tones: ["practical", "funny"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=smart+led+strip+lights+wifi&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=smart+led+strip" }
        ]
    },
    {
        id: "gt-06",
        name: "Portable Bluetooth Projector",
        desc: "Compact 1080p mini projector with built-in speakers, HDMI input, and keystone correction for backyard movie nights.",
        price: "89.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "housewarming"],
        interests: ["tech"],
        tones: ["practical", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=portable+mini+projector+1080p&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=mini+projector" }
        ]
    },
    {
        id: "gt-07",
        name: "VR Headset Stand & Charging Dock",
        desc: "Premium aluminum display stand with integrated USB-C charging dock for Meta Quest and other VR headsets.",
        price: "34.99",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=vr+headset+charging+stand&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=vr+headset+stand" }
        ]
    },
    {
        id: "gt-08",
        name: "FPV Camera Drone with 4K",
        desc: "Beginner-friendly foldable drone with 4K UHD camera, GPS return-to-home, and 28-minute flight time per battery.",
        price: "199.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "graduation"],
        interests: ["tech", "outdoor"],
        tones: ["luxury", "practical"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=4k+camera+drone+gps+foldable&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=camera+drone" }
        ]
    },
    {
        id: "gt-09",
        name: "Streaming Studio Microphone Kit",
        desc: "USB condenser mic bundle with boom arm, pop filter, and shock mount — podcast-ready right out of the box.",
        price: "59.99",
        recipients: ["friend", "partner", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "graduation"],
        interests: ["tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=usb+condenser+microphone+kit+streaming&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=streaming+microphone" }
        ]
    },
    {
        id: "gt-10",
        name: "Smart Plug 4-Pack with Energy Monitoring",
        desc: "WiFi smart plugs with real-time energy tracking, scheduling, and voice control through Alexa and Google Home.",
        price: "19.99",
        recipients: ["parent", "partner", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["housewarming", "holiday", "generic"],
        interests: ["tech", "home"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=smart+plug+energy+monitoring+4+pack&tag=presentpfct-20" }
        ]
    },
    {
        id: "gt-11",
        name: "Wireless Charging Desk Pad",
        desc: "Oversized leather desk mat with built-in Qi wireless charging zone — charges your phone while you work or game.",
        price: "45.00",
        recipients: ["colleague", "partner", "friend"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "graduation", "generic"],
        interests: ["tech"],
        tones: ["practical", "luxury"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=wireless+charging+desk+pad+leather&tag=presentpfct-20" }
        ]
    },
    {
        id: "gt-12",
        name: "Ring Light with Tripod Stand",
        desc: "18-inch LED ring light with adjustable color temperature, phone holder, and extendable tripod for content creators.",
        price: "29.99",
        recipients: ["friend", "child", "partner"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=ring+light+tripod+18+inch&tag=presentpfct-20" }
        ]
    },
    {
        id: "gt-13",
        name: "Retro Pixel Art Digital Frame",
        desc: "Programmable LED pixel display that shows custom pixel art, notifications, and retro-style animations on your desk.",
        price: "49.99",
        recipients: ["friend", "child", "partner"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech", "home"],
        tones: ["funny", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=pixel+art+digital+frame+led&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=pixel+art+display" }
        ]
    },
    {
        id: "gt-14",
        name: "Portable Espresso Maker",
        desc: "Hand-powered portable espresso machine that brews barista-quality shots anywhere — no electricity or pods required.",
        price: "64.00",
        recipients: ["partner", "colleague", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech", "cooking"],
        tones: ["practical", "luxury"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=portable+espresso+maker+manual&tag=presentpfct-20" }
        ]
    },
    {
        id: "gt-15",
        name: "Smart Video Doorbell Camera",
        desc: "1080p wireless doorbell with two-way audio, night vision, and instant motion alerts directly to your phone.",
        price: "44.99",
        recipients: ["parent", "partner"],
        genders: ["male", "female", "unisex"],
        occasions: ["housewarming", "holiday", "birthday"],
        interests: ["tech", "home"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=wireless+video+doorbell+camera&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=video+doorbell" }
        ]
    },
    {
        id: "gt-16",
        name: "Gaming Mouse Pad XXL with RGB",
        desc: "Extended 36-inch gaming desk pad with 14 RGB lighting modes, anti-slip rubber base, and waterproof micro-weave surface.",
        price: "18.99",
        recipients: ["friend", "child"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["tech"],
        tones: ["funny", "practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=rgb+gaming+mouse+pad+xxl&tag=presentpfct-20" }
        ]
    },

    // ========== BOOKS & READING (8 new items) ==========
    {
        id: "gb-04",
        name: "Kindle Paperwhite Signature Edition",
        desc: "Waterproof e-reader with 6.8-inch flush-front display, wireless charging, adjustable warm light, and 32GB storage.",
        price: "189.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "graduation"],
        interests: ["books", "tech"],
        tones: ["luxury", "practical"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=kindle+paperwhite+signature+edition&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-05",
        name: "Book Nook Shelf Insert Diorama",
        desc: "Handcrafted miniature bookshelf alley diorama with LED lights — turns any bookcase into a magical scene.",
        price: "38.00",
        recipients: ["friend", "partner", "parent"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "housewarming"],
        interests: ["books", "home"],
        tones: ["heartfelt", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=book+nook+shelf+insert" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=book+nook+shelf+insert+diorama&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-06",
        name: "Literary Map Art Print",
        desc: "Beautifully illustrated poster mapping iconic fictional worlds from classic literature — archival-quality print.",
        price: "24.00",
        recipients: ["friend", "colleague", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books", "home"],
        tones: ["heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=literary+map+poster" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=literary+map+art+print&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-07",
        name: "Personalized Embossed Book Stamp",
        desc: "Custom brass library stamp with your name or monogram — marks every book in your collection with elegance.",
        price: "29.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=personalized+book+stamp+embossed" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=custom+book+stamp+library&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-08",
        name: "Kindle Oasis Leather Cover",
        desc: "Premium genuine leather case with auto wake/sleep and magnetic closure designed specifically for Kindle Oasis.",
        price: "49.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["luxury", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=kindle+oasis+leather+cover&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-09",
        name: "Banned Books Enamel Pin Set",
        desc: "Collector set of 6 enamel pins celebrating famously challenged novels — a wearable statement for literary rebels.",
        price: "16.99",
        recipients: ["friend", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books", "fashion"],
        tones: ["funny", "heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=banned+books+enamel+pins" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=banned+books+enamel+pin+set&tag=presentpfct-20" }
        ]
    },
    {
        id: "gb-10",
        name: "Bibliophile Reading Journal",
        desc: "Hardcover guided journal with prompts for tracking 100 books — includes rating scales, favorite quotes, and mood logs.",
        price: "14.95",
        recipients: ["friend", "partner", "parent"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["heartfelt", "practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=reading+journal+book+tracker&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=book+lover+reading+journal" }
        ]
    },
    {
        id: "gb-11",
        name: "Wooden Book Valet & Page Holder",
        desc: "Handmade walnut wood thumb page holder and book stand that lets you read hands-free in bed or at the table.",
        price: "21.00",
        recipients: ["parent", "friend", "partner"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["books"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=wooden+book+page+holder" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=wood+thumb+page+holder+book&tag=presentpfct-20" }
        ]
    },

    // ========== FASHION & STYLE (12 new items) ==========
    {
        id: "gf-04",
        name: "Minimalist Stacking Ring Set",
        desc: "Set of 5 dainty 14K gold-plated stacking rings in varying textures — hammered, twisted, and smooth finishes.",
        price: "24.99",
        recipients: ["partner", "friend"],
        genders: ["female"],
        occasions: ["birthday", "anniversary", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["heartfelt", "luxury"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=gold+stacking+rings+set+women&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=minimalist+stacking+rings" }
        ]
    },
    {
        id: "gf-05",
        name: "Automatic Skeleton Watch",
        desc: "Self-winding mechanical watch with exhibition caseback, sapphire crystal, and genuine leather strap — no battery needed.",
        price: "129.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male"],
        occasions: ["birthday", "anniversary", "graduation"],
        interests: ["fashion"],
        tones: ["luxury", "heartfelt"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=automatic+skeleton+watch+men&tag=presentpfct-20" },
            { name: "Nordstrom", url: "https://www.nordstrom.com/sr?keyword=automatic+watch+men" }
        ]
    },
    {
        id: "gf-06",
        name: "Italian Leather Crossbody Bag",
        desc: "Compact, structured crossbody in butter-soft Italian leather with adjustable strap and gold-tone hardware.",
        price: "85.00",
        recipients: ["partner", "friend", "parent"],
        genders: ["female"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["fashion"],
        tones: ["luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=italian+leather+crossbody+bag+women&tag=presentpfct-20" },
            { name: "Nordstrom", url: "https://www.nordstrom.com/sr?keyword=leather+crossbody+bag" }
        ]
    },
    {
        id: "gf-07",
        name: "Polarized Classic Aviator Sunglasses",
        desc: "UV400 polarized lenses in a lightweight titanium frame with spring hinges — timeless style meets serious sun protection.",
        price: "28.00",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion", "outdoor"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=polarized+aviator+sunglasses+titanium&tag=presentpfct-20" }
        ]
    },
    {
        id: "gf-08",
        name: "Cashmere Blend Infinity Scarf",
        desc: "Luxuriously soft cashmere-wool blend infinity scarf in a versatile neutral palette that elevates any winter outfit.",
        price: "42.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["heartfelt", "luxury"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cashmere+infinity+scarf+women&tag=presentpfct-20" },
            { name: "Nordstrom", url: "https://www.nordstrom.com/sr?keyword=cashmere+scarf" }
        ]
    },
    {
        id: "gf-09",
        name: "Silk Tie & Pocket Square Gift Set",
        desc: "Hand-stitched 100% mulberry silk tie paired with a coordinating pocket square in a luxury presentation box.",
        price: "38.00",
        recipients: ["partner", "parent", "colleague"],
        genders: ["male"],
        occasions: ["birthday", "anniversary", "graduation", "generic"],
        interests: ["fashion"],
        tones: ["luxury", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=silk+tie+pocket+square+gift+set&tag=presentpfct-20" },
            { name: "Nordstrom", url: "https://www.nordstrom.com/sr?keyword=silk+tie+gift+set" }
        ]
    },
    {
        id: "gf-10",
        name: "Personalized Leather Belt",
        desc: "Full-grain vegetable-tanned leather belt with custom monogram stamping and hand-burnished edges.",
        price: "55.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["fashion"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=personalized+leather+belt" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=custom+monogram+leather+belt&tag=presentpfct-20" }
        ]
    },
    {
        id: "gf-11",
        name: "Pearl Huggie Hoop Earrings",
        desc: "14K gold vermeil huggie hoops adorned with freshwater pearls — effortlessly elegant for everyday or special occasions.",
        price: "34.00",
        recipients: ["partner", "friend", "parent"],
        genders: ["female"],
        occasions: ["birthday", "anniversary", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["luxury", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=pearl+huggie+hoop+earrings+gold&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=pearl+huggie+earrings+gold" }
        ]
    },
    {
        id: "gf-12",
        name: "Premium Garment Travel Bag",
        desc: "Convertible suit garment bag that transforms into a duffel — wrinkle-free travel for business trips and weddings.",
        price: "69.00",
        recipients: ["partner", "colleague", "parent"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "graduation", "generic"],
        interests: ["fashion"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=convertible+garment+bag+duffel&tag=presentpfct-20" }
        ]
    },
    {
        id: "gf-13",
        name: "Bamboo Fiber Lounge Set",
        desc: "Ultra-soft matching top and jogger set in breathable bamboo viscose — the coziest thing you will ever wear.",
        price: "52.00",
        recipients: ["partner", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion", "wellness"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=bamboo+lounge+set+women&tag=presentpfct-20" }
        ]
    },
    {
        id: "gf-14",
        name: "Handmade Beaded Bracelet Set",
        desc: "Set of 3 natural stone bracelets with lava rock, tiger eye, and howlite beads — comes in a gift-ready pouch.",
        price: "12.99",
        recipients: ["friend", "child", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion"],
        tones: ["heartfelt", "funny"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=natural+stone+bracelet+set+men&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=lava+stone+bracelet+set" }
        ]
    },
    {
        id: "gf-15",
        name: "Luxury Silk Sleep Mask",
        desc: "100% mulberry silk eye mask with adjustable elastic and contoured nose bridge — total blackout comfort.",
        price: "15.99",
        recipients: ["partner", "friend", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["fashion", "wellness"],
        tones: ["heartfelt", "practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=mulberry+silk+sleep+mask&tag=presentpfct-20" }
        ]
    },

    // ========== COOKING & CULINARY (10 new items) ==========
    {
        id: "gc-04",
        name: "Japanese Damascus Steel Chef Knife",
        desc: "Hand-forged 8-inch Gyuto knife with 67-layer Damascus steel blade and ergonomic pakkawood handle.",
        price: "89.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["cooking"],
        tones: ["luxury", "practical"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=japanese+damascus+chef+knife+8+inch&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-05",
        name: "Salt Block Cooking & Serving Set",
        desc: "Himalayan pink salt slab with stainless steel holder — cook, cure, and present food with mineral-rich flavor.",
        price: "32.00",
        recipients: ["partner", "friend", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday"],
        interests: ["cooking"],
        tones: ["funny", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=himalayan+salt+block+cooking+set&tag=presentpfct-20" },
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=salt+block" }
        ]
    },
    {
        id: "gc-06",
        name: "International Spice Gift Box",
        desc: "Collection of 24 globally-sourced spices in glass jars with recipe cards for Indian, Thai, Mexican, and Moroccan cuisine.",
        price: "44.99",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=international+spice+gift+set+box&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=gourmet+spice+gift+box" }
        ]
    },
    {
        id: "gc-07",
        name: "Pasta Making Machine (Stainless Steel)",
        desc: "Heavy-duty hand-crank pasta roller and cutter with 9 thickness settings — makes fettuccine, spaghetti, and lasagna sheets.",
        price: "39.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "housewarming", "holiday"],
        interests: ["cooking"],
        tones: ["practical", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=pasta+maker+machine+stainless+steel&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-08",
        name: "Gourmet Chocolate Truffle Making Kit",
        desc: "All-in-one kit with Belgian couverture chocolate, molds, cocoa powder, and step-by-step instructions for 30 truffles.",
        price: "28.00",
        recipients: ["partner", "friend", "child"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "anniversary", "generic"],
        interests: ["cooking"],
        tones: ["heartfelt", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=chocolate+truffle+making+kit&tag=presentpfct-20" },
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=chocolate+making+kit" }
        ]
    },
    {
        id: "gc-09",
        name: "Artisan Olive Oil & Balsamic Set",
        desc: "Italian estate-bottled extra virgin olive oil and aged balsamic vinegar in hand-painted ceramic cruets.",
        price: "54.00",
        recipients: ["parent", "partner", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["housewarming", "holiday", "birthday", "generic"],
        interests: ["cooking"],
        tones: ["luxury", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=artisan+olive+oil+balsamic+vinegar+gift+set&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-10",
        name: "Digital Meat Thermometer (Instant Read)",
        desc: "Ultra-fast 2-second read probe thermometer with backlit display, magnetic back, and IP67 waterproof rating.",
        price: "16.99",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "housewarming", "generic"],
        interests: ["cooking", "outdoor"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=instant+read+meat+thermometer+digital&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-11",
        name: "Sushi Making Kit for Beginners",
        desc: "Complete bamboo sushi rolling set with mats, chopsticks, paddle, and recipe booklet — host your own sushi night.",
        price: "21.99",
        recipients: ["friend", "partner", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["cooking"],
        tones: ["funny", "practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=sushi+making+kit+beginner&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-12",
        name: "Premium Cutting Board & Knife Set",
        desc: "End-grain acacia wood cutting board paired with a high-carbon stainless steel santoku knife in a gift box.",
        price: "74.00",
        recipients: ["partner", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "housewarming"],
        interests: ["cooking"],
        tones: ["practical", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=end+grain+cutting+board+knife+gift+set&tag=presentpfct-20" }
        ]
    },
    {
        id: "gc-13",
        name: "Cocktail Smoker Kit with Torch",
        desc: "Whiskey smoker set with 4 wood chip flavors, butane torch, and old fashioned glass — instant smoky cocktails.",
        price: "37.99",
        recipients: ["partner", "friend", "colleague"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "housewarming", "generic"],
        interests: ["cooking"],
        tones: ["luxury", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cocktail+smoker+kit+whiskey&tag=presentpfct-20" },
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=cocktail+smoker" }
        ]
    },

    // ========== OUTDOORS & SPORTS (10 new items) ==========
    {
        id: "go-04",
        name: "Insulated Stainless Steel Water Bottle",
        desc: "32oz triple-wall vacuum insulated bottle that keeps drinks ice cold 24 hours or hot 12 — leak-proof sport cap included.",
        price: "24.99",
        recipients: ["partner", "friend", "child", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "wellness"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=insulated+water+bottle+32oz+stainless&tag=presentpfct-20" }
        ]
    },
    {
        id: "go-05",
        name: "Fitness Tracker Smart Band",
        desc: "Slim waterproof fitness band with heart rate, sleep tracking, blood oxygen, and 14-day battery life.",
        price: "39.99",
        recipients: ["partner", "friend", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "tech", "wellness"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=fitness+tracker+band+heart+rate&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=fitness+tracker+band" }
        ]
    },
    {
        id: "go-06",
        name: "Ultralight Backpacking Tent (2-Person)",
        desc: "3-season freestanding tent weighing just 3.5 lbs with full rainfly, aluminum poles, and dual vestibules.",
        price: "139.00",
        recipients: ["partner", "friend"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday"],
        interests: ["outdoor"],
        tones: ["practical", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=ultralight+backpacking+tent+2+person&tag=presentpfct-20" },
            { name: "REI", url: "https://www.rei.com/search?q=ultralight+tent" }
        ]
    },
    {
        id: "go-07",
        name: "Trekking Poles (Carbon Fiber, Pair)",
        desc: "Collapsible carbon fiber trekking poles with cork grips, quick-lock adjustment, and tungsten carbide tips.",
        price: "55.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=carbon+fiber+trekking+poles+cork&tag=presentpfct-20" },
            { name: "REI", url: "https://www.rei.com/search?q=trekking+poles+carbon" }
        ]
    },
    {
        id: "go-08",
        name: "Emergency Survival Kit (72-Hour)",
        desc: "Compact tactical bag with fire starter, water filter, first aid, emergency blanket, and multi-tool for any situation.",
        price: "34.99",
        recipients: ["partner", "friend", "parent"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=emergency+survival+kit+72+hour&tag=presentpfct-20" }
        ]
    },
    {
        id: "go-09",
        name: "Inflatable Stand-Up Paddleboard",
        desc: "10.5ft all-around SUP board with pump, adjustable paddle, fin, and travel backpack — inflates in under 5 minutes.",
        price: "249.00",
        recipients: ["partner", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday"],
        interests: ["outdoor"],
        tones: ["luxury"],
        budget: "luxury",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=inflatable+stand+up+paddleboard+kit&tag=presentpfct-20" },
            { name: "REI", url: "https://www.rei.com/search?q=inflatable+SUP+board" }
        ]
    },
    {
        id: "go-10",
        name: "Rechargeable LED Headlamp (1000 Lumen)",
        desc: "Ultra-bright USB-C rechargeable headlamp with red light mode, motion sensor, and waterproof IPX6 rating.",
        price: "19.99",
        recipients: ["partner", "friend", "parent"],
        genders: ["male", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=rechargeable+led+headlamp+1000+lumen&tag=presentpfct-20" }
        ]
    },
    {
        id: "go-11",
        name: "Resistance Bands Set (Heavy Duty)",
        desc: "Set of 5 fabric resistance bands with varying tension levels, carry bag, and illustrated exercise guide.",
        price: "14.99",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor", "wellness"],
        tones: ["practical"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+heavy+duty&tag=presentpfct-20" }
        ]
    },
    {
        id: "go-12",
        name: "Waterproof Hiking Daypack (35L)",
        desc: "Tear-resistant ripstop nylon daypack with hydration sleeve, rain cover, and ventilated back panel.",
        price: "48.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["outdoor"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=waterproof+hiking+daypack+35L&tag=presentpfct-20" },
            { name: "REI", url: "https://www.rei.com/search?q=hiking+daypack+35L" }
        ]
    },
    {
        id: "go-13",
        name: "Campfire Cast Iron Skillet Set",
        desc: "Pre-seasoned 10-inch and 6-inch cast iron skillets with silicone handle covers — oven, stove, and campfire safe.",
        price: "29.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday"],
        interests: ["outdoor", "cooking"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cast+iron+skillet+set+pre+seasoned&tag=presentpfct-20" }
        ]
    },

    // ========== WELLNESS & SELF-CARE (10 new items) ==========
    {
        id: "gw-04",
        name: "Percussion Massage Gun",
        desc: "Deep tissue massage gun with 6 attachments, 30 speed levels, and whisper-quiet brushless motor for muscle recovery.",
        price: "79.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness", "outdoor"],
        tones: ["practical", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=percussion+massage+gun+deep+tissue&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=massage+gun" }
        ]
    },
    {
        id: "gw-05",
        name: "Korean Skincare Routine Kit",
        desc: "10-step K-beauty starter set with cleanser, toner, serum, snail mucin essence, sheet masks, and SPF moisturizer.",
        price: "45.00",
        recipients: ["partner", "friend"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "luxury"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=korean+skincare+routine+set+10+step&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-06",
        name: "Cork Yoga Mat (Extra Thick)",
        desc: "Non-slip natural cork and TPE yoga mat with alignment lines, 6mm thickness, and included carry strap.",
        price: "54.00",
        recipients: ["partner", "friend", "parent"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cork+yoga+mat+non+slip+alignment&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-07",
        name: "Acupressure Mat & Pillow Set",
        desc: "Thousands of pressure points across an organic linen mat and neck pillow — relieves tension and promotes sleep.",
        price: "29.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=acupressure+mat+pillow+set&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-08",
        name: "Aromatherapy Shower Steamers (12-Pack)",
        desc: "Handmade shower bombs in eucalyptus, lavender, and citrus scents — transforms your shower into a spa ritual.",
        price: "13.99",
        recipients: ["friend", "colleague", "partner"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=aromatherapy+shower+steamers+12+pack&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=shower+steamer+gift+set" }
        ]
    },
    {
        id: "gw-09",
        name: "Smart Sleep Sound Machine",
        desc: "Compact white noise machine with 30 soothing soundscapes, night light, timer, and companion app for sleep tracking.",
        price: "49.99",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "housewarming"],
        interests: ["wellness", "tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=smart+sound+machine+white+noise&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-10",
        name: "Jade Roller & Gua Sha Set",
        desc: "Genuine jade facial roller and gua sha stone in a velvet pouch — reduces puffiness and promotes lymphatic drainage.",
        price: "11.99",
        recipients: ["friend", "partner", "colleague"],
        genders: ["female"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=jade+roller+gua+sha+set+genuine&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-11",
        name: "Heated Neck & Shoulder Massager",
        desc: "Shiatsu neck massager with 8 deep-kneading nodes, soothing heat therapy, and adjustable intensity for home or office.",
        price: "42.00",
        recipients: ["parent", "partner", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness"],
        tones: ["practical", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=shiatsu+neck+shoulder+massager+heat&tag=presentpfct-20" }
        ]
    },
    {
        id: "gw-12",
        name: "Gratitude & Mindfulness Journal",
        desc: "Guided 90-day journal with morning and evening prompts, affirmations, and weekly reflection pages in linen hardcover.",
        price: "16.99",
        recipients: ["friend", "partner", "parent"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["wellness", "books"],
        tones: ["heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=gratitude+mindfulness+journal+guided&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=gratitude+journal+linen" }
        ]
    },
    {
        id: "gw-13",
        name: "Luxury Bath Bomb Gift Set (24-Piece)",
        desc: "Handmade bath bombs with shea butter, essential oils, and dried flowers — 24 unique scents in a keepsake box.",
        price: "23.99",
        recipients: ["partner", "friend", "parent"],
        genders: ["female"],
        occasions: ["birthday", "holiday", "generic", "anniversary"],
        interests: ["wellness"],
        tones: ["heartfelt", "luxury"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=bath+bomb+gift+set+24+handmade&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=bath+bomb+gift+box+handmade" }
        ]
    },

    // ========== HOME & DECOR (10 new items) ==========
    {
        id: "gh-01",
        name: "Luxury Soy Candle Trio Set",
        desc: "Three hand-poured soy wax candles in amber jars with woodwick — scents of sandalwood, vanilla bean, and cedarwood.",
        price: "34.00",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["home"],
        tones: ["heartfelt", "luxury"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=soy+candle+trio+woodwick" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=luxury+soy+candle+gift+set+woodwick&tag=presentpfct-20" }
        ]
    },
    {
        id: "gh-02",
        name: "Indoor Herb Garden Starter Kit",
        desc: "Self-watering planter with grow light, organic seed pods for basil, cilantro, and mint — harvest herbs year-round.",
        price: "29.99",
        recipients: ["parent", "partner", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["housewarming", "birthday", "holiday"],
        interests: ["home", "cooking"],
        tones: ["practical", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=indoor+herb+garden+kit+self+watering&tag=presentpfct-20" }
        ]
    },
    {
        id: "gh-03",
        name: "Abstract Minimalist Art Print Set",
        desc: "Gallery-quality set of 3 abstract prints on heavyweight matte paper — neutral tones that elevate any room.",
        price: "22.00",
        recipients: ["friend", "partner", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["housewarming", "birthday", "holiday", "generic"],
        interests: ["home"],
        tones: ["heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=minimalist+abstract+art+print+set" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=abstract+art+print+set+minimalist&tag=presentpfct-20" }
        ]
    },
    {
        id: "gh-04",
        name: "Smart WiFi Speaker with Voice Assistant",
        desc: "Rich 360-degree sound with built-in Alexa, multi-room audio support, and smart home hub functionality.",
        price: "49.99",
        recipients: ["parent", "partner", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday"],
        interests: ["home", "tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=smart+speaker+alexa+echo&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=smart+speaker" }
        ]
    },
    {
        id: "gh-05",
        name: "Macramé Plant Hanger Set (3-Pack)",
        desc: "Handwoven cotton macramé hangers in three lengths with boho-style beads — fits 4-8 inch pots.",
        price: "17.99",
        recipients: ["friend", "partner", "parent"],
        genders: ["female", "unisex"],
        occasions: ["housewarming", "birthday", "holiday", "generic"],
        interests: ["home"],
        tones: ["heartfelt"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=macrame+plant+hanger+set+3+pack&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=macrame+plant+hanger+set" }
        ]
    },
    {
        id: "gh-06",
        name: "Personalized Cutting Board",
        desc: "Custom laser-engraved bamboo cutting board with family name and est. date — doubles as a stunning charcuterie display.",
        price: "32.00",
        recipients: ["partner", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["anniversary", "housewarming", "holiday"],
        interests: ["home", "cooking"],
        tones: ["heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Etsy", url: "https://www.etsy.com/search?q=personalized+cutting+board+engraved" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=personalized+cutting+board+engraved&tag=presentpfct-20" }
        ]
    },
    {
        id: "gh-07",
        name: "Weighted Blanket with Cooling Cover",
        desc: "15lb glass-bead weighted blanket with removable bamboo cooling cover — year-round comfort for better sleep.",
        price: "69.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "housewarming"],
        interests: ["home", "wellness"],
        tones: ["heartfelt", "practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=weighted+blanket+cooling+cover+15lb&tag=presentpfct-20" }
        ]
    },
    {
        id: "gh-08",
        name: "Succulent Terrarium Kit",
        desc: "Complete DIY terrarium with glass globe, live succulents, decorative stones, moss, and mini figurines.",
        price: "24.99",
        recipients: ["friend", "partner", "colleague"],
        genders: ["female", "unisex"],
        occasions: ["birthday", "housewarming", "holiday", "generic"],
        interests: ["home"],
        tones: ["heartfelt", "funny"],
        budget: "budget",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=succulent+terrarium+kit+glass+globe&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=succulent+terrarium+kit" }
        ]
    },
    {
        id: "gh-09",
        name: "Vintage Map Cork Globe",
        desc: "12-inch cork globe with antique-style map — pin your travels and mark bucket-list destinations with included pushpins.",
        price: "44.00",
        recipients: ["friend", "partner", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "graduation", "housewarming"],
        interests: ["home"],
        tones: ["heartfelt", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=cork+globe+push+pin+travel+map&tag=presentpfct-20" },
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=cork+globe" }
        ]
    },
    {
        id: "gh-10",
        name: "Floating Shelf Set (Walnut, 3-Pack)",
        desc: "Solid walnut floating shelves with invisible mounting brackets — clean lines and warm wood tones for any wall.",
        price: "42.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["housewarming", "birthday", "holiday"],
        interests: ["home"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=walnut+floating+shelves+set+3&tag=presentpfct-20" },
            { name: "Etsy", url: "https://www.etsy.com/search?q=walnut+floating+shelf+set" }
        ]
    },

    // ========== EXPERIENCE & SUBSCRIPTION (10 new items) ==========
    {
        id: "ge-01",
        name: "MasterClass Annual Membership",
        desc: "Unlimited access to 180+ classes taught by the world's best — from cooking with Gordon Ramsay to writing with Neil Gaiman.",
        price: "120.00",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "graduation", "generic"],
        interests: ["experience"],
        tones: ["luxury", "heartfelt"],
        budget: "premium",
        sellers: [
            { name: "MasterClass", url: "https://www.masterclass.com/gift" }
        ]
    },
    {
        id: "ge-02",
        name: "Wine Club 3-Month Gift Subscription",
        desc: "Three months of curated wine deliveries — each shipment includes 2 premium bottles with tasting notes and food pairing guides.",
        price: "149.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["experience", "cooking"],
        tones: ["luxury", "heartfelt"],
        budget: "premium",
        sellers: [
            { name: "Winc", url: "https://www.winc.com/gift" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=wine+club+gift+subscription&tag=presentpfct-20" }
        ]
    },
    {
        id: "ge-03",
        name: "Escape Room Experience Gift Card",
        desc: "Gift card for a thrilling escape room adventure for 2-6 players at top-rated local venues nationwide.",
        price: "75.00",
        recipients: ["partner", "friend", "child"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "anniversary", "generic"],
        interests: ["experience"],
        tones: ["funny", "heartfelt"],
        budget: "premium",
        sellers: [
            { name: "Groupon", url: "https://www.groupon.com/local/escape-room" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=escape+room+experience+gift+card&tag=presentpfct-20" }
        ]
    },
    {
        id: "ge-04",
        name: "Spotify Premium 6-Month Gift Card",
        desc: "Six months of ad-free music streaming, offline downloads, and personalized playlists across all their devices.",
        price: "59.99",
        recipients: ["friend", "child", "partner", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "graduation", "generic"],
        interests: ["experience", "tech"],
        tones: ["practical"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=spotify+premium+gift+card+6+month&tag=presentpfct-20" },
            { name: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=spotify+gift+card" }
        ]
    },
    {
        id: "ge-05",
        name: "Cooking Class Gift Certificate",
        desc: "Hands-on cooking class experience for two — choose from Italian, Thai, sushi-making, or pastry workshops.",
        price: "89.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "anniversary", "holiday"],
        interests: ["experience", "cooking"],
        tones: ["heartfelt", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Groupon", url: "https://www.groupon.com/local/cooking-classes" },
            { name: "Uncommon Goods", url: "https://www.uncommongoods.com/search?q=cooking+class+gift" }
        ]
    },
    {
        id: "ge-06",
        name: "National Parks Annual Pass",
        desc: "One full year of unlimited entry to all 400+ US national parks and federal recreational lands for the whole vehicle.",
        price: "80.00",
        recipients: ["partner", "parent", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "anniversary"],
        interests: ["experience", "outdoor"],
        tones: ["heartfelt", "practical"],
        budget: "premium",
        sellers: [
            { name: "USGS Store", url: "https://store.usgs.gov/pass/index.html" },
            { name: "REI", url: "https://www.rei.com/product/national-parks-pass" }
        ]
    },
    {
        id: "ge-07",
        name: "Audible 3-Month Gift Membership",
        desc: "Three months of premium audiobook access with 1 credit per month — choose from 700,000+ titles narrated by top talent.",
        price: "44.85",
        recipients: ["partner", "parent", "friend", "colleague"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["experience", "books"],
        tones: ["practical", "heartfelt"],
        budget: "moderate",
        sellers: [
            { name: "Amazon", url: "https://www.amazon.com/s?k=audible+gift+membership+3+month&tag=presentpfct-20" }
        ]
    },
    {
        id: "ge-08",
        name: "Hot Air Balloon Ride Gift Voucher",
        desc: "Unforgettable sunrise hot air balloon flight for two over scenic countryside — includes champagne toast upon landing.",
        price: "299.00",
        recipients: ["partner", "parent"],
        genders: ["male", "female", "unisex"],
        occasions: ["anniversary", "birthday", "holiday"],
        interests: ["experience", "outdoor"],
        tones: ["luxury", "heartfelt"],
        budget: "luxury",
        sellers: [
            { name: "Groupon", url: "https://www.groupon.com/local/hot-air-balloon-rides" },
            { name: "Viator", url: "https://www.viator.com/searchResults/all?text=hot+air+balloon" }
        ]
    },
    {
        id: "ge-09",
        name: "Date Night Subscription Box",
        desc: "Monthly delivery of curated date night activities with games, recipes, and conversation starters — perfect for couples.",
        price: "39.99",
        recipients: ["partner"],
        genders: ["male", "female", "unisex"],
        occasions: ["anniversary", "birthday", "holiday", "generic"],
        interests: ["experience"],
        tones: ["heartfelt", "funny"],
        budget: "moderate",
        sellers: [
            { name: "Cratejoy", url: "https://www.cratejoy.com/search?q=date+night+box" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=date+night+subscription+box&tag=presentpfct-20" }
        ]
    },
    {
        id: "ge-10",
        name: "Museum Membership Gift Card",
        desc: "Annual membership to a major museum or art gallery — includes unlimited visits, member events, and gift shop discounts.",
        price: "95.00",
        recipients: ["parent", "partner", "friend"],
        genders: ["male", "female", "unisex"],
        occasions: ["birthday", "holiday", "generic"],
        interests: ["experience"],
        tones: ["heartfelt", "luxury"],
        budget: "premium",
        sellers: [
            { name: "Groupon", url: "https://www.groupon.com/local/museum-tickets" },
            { name: "Amazon", url: "https://www.amazon.com/s?k=museum+membership+gift+card&tag=presentpfct-20" }
        ]
    }

];

// --- Freemium Gate System ---
const FREE_SEARCH_LIMIT = 3;
let searchCount = parseInt(localStorage.getItem('pp_search_count') || '0');
let searchDate = localStorage.getItem('pp_search_date') || '';
let userEmail = localStorage.getItem('pp_user_email') || '';
let isPro = localStorage.getItem('pp_is_pro') === 'true';
let supabaseClient = null;

// Initialize Supabase Client dynamically from serverless config
async function initSupabase() {
    try {
        const res = await fetch('/api/config');
        const config = await res.json();
        if (config.supabaseUrl && config.supabaseAnonKey) {
            supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
            console.log('[Supabase] Client initialized successfully.');
            await syncUserStatus();
        } else {
            console.warn('[Supabase] Missing credentials. Operating in local-only offline mode.');
            updateProUI();
        }
    } catch (err) {
        console.error('[Supabase] Failed to initialize client:', err);
        updateProUI();
    }
}

// Sync subscription status with Vercel serverless database
async function syncUserStatus() {
    if (!userEmail) return;
    try {
        const res = await fetch(`/api/user-status?email=${encodeURIComponent(userEmail)}`);
        const data = await res.json();
        isPro = data.isPro === true;
        localStorage.setItem('pp_is_pro', isPro.toString());
        updateProUI();
    } catch (err) {
        console.error('[Billing] Failed to sync subscription status:', err);
    }
}

// Update navigation Pro badge UI
function updateProUI() {
    const btnPro = document.getElementById('btn-open-pro-modal');
    if (btnPro) {
        if (isPro) {
            btnPro.innerHTML = '✦ PRO ACTIVE';
            btnPro.style.background = 'linear-gradient(135deg, #8b5cf6, #d4af37)';
            btnPro.style.color = '#fff';
        } else {
            btnPro.innerHTML = '✦ PRO';
            btnPro.style.background = '';
            btnPro.style.color = '';
        }
    }
}

function resetDailySearchCount() {
    const today = new Date().toDateString();
    if (searchDate !== today) {
        searchCount = 0;
        searchDate = today;
        localStorage.setItem('pp_search_count', '0');
        localStorage.setItem('pp_search_date', today);
    }
}

function incrementSearchCount() {
    searchCount++;
    localStorage.setItem('pp_search_count', searchCount.toString());
}

function canSearch() {
    if (isPro) return true;
    resetDailySearchCount();
    return searchCount < FREE_SEARCH_LIMIT;
}

function showEmailCapture() {
    document.getElementById('modal-email-capture')?.classList.remove('hidden');
}

function showProUpgrade() {
    document.getElementById('modal-pro-upgrade')?.classList.remove('hidden');
}

async function handleEmailSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('capture-name')?.value?.trim();
    const email = document.getElementById('capture-email')?.value?.trim();
    if (!name || !email) return;
    
    userEmail = email;
    localStorage.setItem('pp_user_email', email);
    localStorage.setItem('pp_user_name', name);
    
    // Close modal
    document.getElementById('modal-email-capture')?.classList.add('hidden');
    showToast('Welcome, ' + name + '! You now have full free access. 🎉');
    
    // Save lead to Supabase
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient
                .from('profiles')
                .upsert({ 
                    email: email, 
                    name: name,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'email' });
            if (error) console.error('[Supabase] Error writing lead:', error);
            else console.log('[Supabase] Lead saved successfully.');
        } catch (err) {
            console.error('[Supabase] Database upsert failed:', err);
        }
    }
    
    await syncUserStatus();
}

// --- State Variables ---
const userSelections = {
    recipient: null,
    gender: null,
    occasion: null,
    interest: null,
    tone: null,
    budget: null
};

let currentStep = 1;
const totalSteps = 6;
let savedWishlist = JSON.parse(localStorage.getItem('presentperfect_wishlist')) || [];
let trackedGifts = JSON.parse(localStorage.getItem('presentperfect_tracked_gifts')) || [];
let campaignBudget = parseFloat(localStorage.getItem('presentperfect_campaign_budget')) || 1000;

// --- DOM References ---
const stepPanels = document.querySelectorAll('.step-panel');
const progressIndicator = document.getElementById('progress-indicator');
const stepCounter = document.getElementById('step-counter');
const btnBack = document.getElementById('btn-wizard-back');
const wizardCard = document.getElementById('gift-wizard-card');
const recommendationsView = document.getElementById('recommendations-view');
const recommendationsGrid = document.getElementById('recommendations-grid');
const btnRestart = document.getElementById('btn-restart-wizard');
const toastEl = document.getElementById('toast-el');

// Tabs
const tabButtons = document.querySelectorAll('.nav-tab');
const tabSections = document.querySelectorAll('.tab-section');

// Wishlist
const wishlistDrawer = document.getElementById('wishlist-drawer');
const btnToggleWishlist = document.getElementById('btn-toggle-wishlist');
const btnCloseWishlist = document.getElementById('btn-close-wishlist');
const wishlistItemsContainer = document.getElementById('wishlist-items');
const wishlistCountBadge = document.getElementById('wishlist-count');
const wishlistEmptyMsg = document.getElementById('wishlist-empty-msg');
const wishlistActionsPanel = document.getElementById('wishlist-actions-panel');
const btnPrintWishlist = document.getElementById('btn-print-wishlist');
const btnShareWishlist = document.getElementById('btn-share-wishlist');

// Tracker Elements
const inputCampaignBudget = document.getElementById('input-campaign-budget');
const trackerTotalSpent = document.getElementById('tracker-total-spent');
const trackerRemainingBudget = document.getElementById('tracker-remaining-budget');
const trackerWrappedCount = document.getElementById('tracker-wrapped-count');
const trackerTableBody = document.getElementById('tracker-table-body');
const trackerEmptyState = document.getElementById('tracker-empty-state');
const btnOpenAddManualTracker = document.getElementById('btn-open-add-tracker');
const btnExportCSV = document.getElementById('btn-export-csv');

// Modal Elements
const modalAddTracker = document.getElementById('modal-add-tracker');
const btnCloseTrackerModal = document.getElementById('btn-close-tracker-modal');
const trackerManualForm = document.getElementById('tracker-manual-form');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateWishlistUI();
    
    // Set budget value on input
    inputCampaignBudget.value = campaignBudget;
    updateTrackerUI();
    loadSharedWishlistFromURL();
    
    // Initialize Supabase integration
    initSupabase();
});

// --- Choice Deck UI helpers ---
function updateChoiceDeckUI() {
    const choiceDeck = document.getElementById('choice-deck');
    const choiceBadges = document.getElementById('choice-badges');
    if (!choiceDeck || !choiceBadges) return;
    
    choiceBadges.innerHTML = '';
    
    const emojiMap = {
        recipient: '👤',
        gender: '👥',
        occasion: '🎉',
        interest: '💡',
        tone: '✨',
        budget: '💰'
    };
    
    let activeSelections = 0;
    
    Object.keys(userSelections).forEach(key => {
        const val = userSelections[key];
        if (val) {
            activeSelections++;
            const badge = document.createElement('div');
            badge.classList.add('choice-badge');
            badge.innerHTML = `<span>${emojiMap[key]}</span> ${capitalizeFirstLetter(val)}`;
            choiceBadges.appendChild(badge);
        }
    });
    
    if (activeSelections > 0 && currentStep <= totalSteps && !wizardCard.classList.contains('hidden')) {
        choiceDeck.classList.remove('hidden');
    } else {
        choiceDeck.classList.add('hidden');
    }
}

function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- Elves Workshop loader transition ---
function triggerWorkshopLoader(callback) {
    const wizardInner = document.getElementById('wizard-card-inner');
    if (!wizardInner) {
        callback();
        return;
    }
    
    const loaderHTML = `
        <div class="loader-overlay" id="workshop-loader">
            <div class="loader-content">
                <div class="loader-wreath">🎁</div>
                <h3 class="loader-title">Consulting the Workshop Elves...</h3>
                <p class="loader-subtitle">Wrapping up thoughtful suggestions for your loved ones.</p>
                <div class="loader-bar"><div class="loader-bar-fill"></div></div>
            </div>
        </div>
    `;
    
    wizardInner.insertAdjacentHTML('beforeend', loaderHTML);
    
    setTimeout(() => {
        const loader = document.getElementById('workshop-loader');
        if (loader) loader.classList.add('active');
    }, 50);

    setTimeout(() => {
        const loader = document.getElementById('workshop-loader');
        if (loader) {
            loader.classList.remove('active');
            setTimeout(() => {
                loader.remove();
                callback();
            }, 300);
        } else {
            callback();
        }
    }, 1800);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Tabs Navigation
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabSections.forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Option Button Clicks
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const val = button.getAttribute('data-val');
            
            const currentGrid = button.parentElement;
            currentGrid.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
            
            button.classList.add('selected');
            userSelections[category] = val;
            
            setTimeout(() => {
                advanceStep();
            }, 200);
        });
    });

    // Back Button Click
    btnBack.addEventListener('click', () => {
        if (currentStep > 1) {
            regressStep();
        }
    });

    // Restart Button Click
    btnRestart.addEventListener('click', restartWizard);

    // Wishlist Toggle
    btnToggleWishlist.addEventListener('click', () => {
        wishlistDrawer.classList.toggle('open');
    });
    btnCloseWishlist.addEventListener('click', () => {
        wishlistDrawer.classList.remove('open');
    });

    // Print Wishlist
    btnPrintWishlist.addEventListener('click', () => {
        window.print();
    });

    // Share Wishlist
    btnShareWishlist.addEventListener('click', () => {
        if (savedWishlist.length === 0) {
            showToast("Your wishlist is empty! ✦");
            return;
        }
        const link = getShareableWishlistLink();
        navigator.clipboard.writeText(link).then(() => {
            showToast("Wishlist link copied to clipboard! 🔗");
        });
    });

    // Campaign Budget Input Change
    inputCampaignBudget.addEventListener('input', () => {
        const val = parseFloat(inputCampaignBudget.value) || 0;
        campaignBudget = val;
        localStorage.setItem('presentperfect_campaign_budget', campaignBudget);
        updateTrackerUI();
    });

    // Modal Control
    btnOpenAddManualTracker.addEventListener('click', () => {
        // Clear manual form input values
        trackerManualForm.reset();
        document.getElementById('track-gift-title').value = '';
        document.getElementById('track-price').value = '';
        document.getElementById('track-seller').value = 'Amazon';
        
        modalAddTracker.classList.remove('hidden');
    });

    btnCloseTrackerModal.addEventListener('click', () => {
        modalAddTracker.classList.add('hidden');
    });

    // Manual Log Submit
    trackerManualForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newTrackedItem = {
            id: 'tr-' + Date.now(),
            recipient: document.getElementById('track-recipient-name').value,
            occasion: document.getElementById('track-occasion').value,
            title: document.getElementById('track-gift-title').value,
            price: parseFloat(document.getElementById('track-price').value) || 0,
            seller: document.getElementById('track-seller').value || 'Amazon',
            status: document.getElementById('track-status').value || 'Planned'
        };
        
        trackedGifts.push(newTrackedItem);
        localStorage.setItem('presentperfect_tracked_gifts', JSON.stringify(trackedGifts));
        
        modalAddTracker.classList.add('hidden');
        updateTrackerUI();
        showToast("Gift logged to campaign dashboard! 🎄");
    });

    // CSV Export Triggers
    btnExportCSV.addEventListener('click', exportTrackerToCSV);

    // Email capture form
    const emailForm = document.getElementById('email-capture-form');
    if (emailForm) emailForm.addEventListener('submit', handleEmailSubmit);

    // Close email modal
    const btnCloseEmail = document.getElementById('btn-close-email-modal');
    if (btnCloseEmail) btnCloseEmail.addEventListener('click', () => {
        document.getElementById('modal-email-capture')?.classList.add('hidden');
    });

    // PRO modal controls
    const btnOpenPro = document.getElementById('btn-open-pro-modal');
    if (btnOpenPro) btnOpenPro.addEventListener('click', showProUpgrade);

    const btnClosePro = document.getElementById('btn-close-pro-modal');
    if (btnClosePro) btnClosePro.addEventListener('click', () => {
        document.getElementById('modal-pro-upgrade')?.classList.add('hidden');
    });

    // Interactive plan selection card toggles
    let selectedPlan = 'annual';
    const optMonthly = document.getElementById('price-option-monthly');
    const optAnnual = document.getElementById('price-option-annual');
    
    if (optMonthly && optAnnual) {
        optMonthly.addEventListener('click', () => {
            selectedPlan = 'monthly';
            optMonthly.classList.add('price-option--selected');
            optAnnual.classList.remove('price-option--selected');
        });
        optAnnual.addEventListener('click', () => {
            selectedPlan = 'annual';
            optAnnual.classList.add('price-option--selected');
            optMonthly.classList.remove('price-option--selected');
        });
    }

    const btnStartTrial = document.getElementById('btn-start-pro-trial');
    if (btnStartTrial) {
        btnStartTrial.addEventListener('click', async () => {
            if (!userEmail) {
                document.getElementById('modal-pro-upgrade')?.classList.add('hidden');
                showEmailCapture();
                return;
            }
            
            showToast('Redirecting to Stripe secure checkout... 💳');
            
            try {
                const res = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        planType: selectedPlan,
                        userEmail: userEmail,
                        userId: userEmail
                    })
                });
                
                const data = await res.json();
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    showToast('Failed to start checkout. Please try again.');
                    console.error('[Billing] Checkout session error:', data);
                }
            } catch (err) {
                console.error('[Billing] Stripe redirect failed:', err);
                showToast('Network error. Please try again.');
            }
        });
    }
}
function advanceStep() {
    if (currentStep < totalSteps) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        stepCounter.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressIndicator.style.width = `${(currentStep / totalSteps) * 100}%`;
        btnBack.removeAttribute('disabled');
        updateChoiceDeckUI();
    } else {
        // Check gates before searching
        if (!userEmail && searchCount >= 1) {
            // After 1st search, require email
            showEmailCapture();
            return;
        }
        if (!canSearch()) {
            showProUpgrade();
            return;
        }
        incrementSearchCount();

        // Hide Choice Deck during loading animation
        const choiceDeck = document.getElementById('choice-deck');
        if (choiceDeck) choiceDeck.classList.add('hidden');
        
        triggerWorkshopLoader(() => {
            generateRecommendations();
        });
    }
}

function regressStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        stepCounter.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressIndicator.style.width = `${(currentStep / totalSteps) * 100}%`;
        
        if (currentStep === 1) {
            btnBack.setAttribute('disabled', 'true');
        }
        updateChoiceDeckUI();
    }
}

function restartWizard() {
    Object.keys(userSelections).forEach(k => userSelections[k] = null);
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = 1;
    document.getElementById(`step-1`).classList.add('active');
    
    stepCounter.textContent = `Step 1 of ${totalSteps}`;
    progressIndicator.style.width = `16.66%`;
    btnBack.setAttribute('disabled', 'true');
    
    recommendationsView.classList.add('hidden');
    wizardCard.classList.remove('hidden');
    document.querySelector('.hero-section').classList.remove('hidden');
    updateChoiceDeckUI();
}

// --- Recommendations Generation ---
function generateRecommendations() {
    wizardCard.classList.add('hidden');
    document.querySelector('.hero-section').classList.add('hidden');
    recommendationsView.classList.remove('hidden');
    
    const scoredGifts = giftDatabase.map(gift => {
        let score = 0;
        
        // Strict Gating: Gender preference check
        const genderMatch = gift.genders.includes(userSelections.gender) || gift.genders.includes('unisex');
        if (!genderMatch) {
            return { gift, score: -100 };
        }
        
        // 1. Interest Match (highest weight)
        if (gift.interests.includes(userSelections.interest)) {
            score += 10;
        }
        
        // 2. Recipient Match
        if (gift.recipients.includes(userSelections.recipient)) {
            score += 5;
        }
        
        // 3. Occasion Match
        if (gift.occasions.includes(userSelections.occasion)) {
            score += 3;
        }
        
        // 4. Budget Match
        if (gift.budget === userSelections.budget) {
            score += 3;
        }
        
        // 5. Tone Match
        if (gift.tones && gift.tones.includes(userSelections.tone)) {
            score += 2;
        }
        
        return { gift, score };
    });
    
    // Filter out mismatches and sort matches descending
    const matches = scoredGifts
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.gift);

    renderRecommendations(matches.slice(0, 6));
}

function renderRecommendations(gifts) {
    recommendationsGrid.innerHTML = '';
    
    if (gifts.length === 0) {
        recommendationsGrid.innerHTML = `
            <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 48px;">
                <p style="font-size: 1.1rem; color: var(--charcoal-light); line-height: 1.6; font-style: italic;">
                    ✦ No direct matches found. Please try starting over with slightly broader filters.
                </p>
            </div>
        `;
        return;
    }

    gifts.forEach(gift => {
        const isSaved = savedWishlist.some(item => item.id === gift.id);
        const card = document.createElement('div');
        card.classList.add('gift-card');
        
        // Create sellers links HTML
        let sellersHTML = '';
        gift.sellers.forEach(seller => {
            sellersHTML += `<a href="${seller.url}" target="_blank" class="btn-shop-option">${seller.name}</a>`;
        });

        card.innerHTML = `
            <div class="gift-header">
                <span class="gift-badge">${gift.budget}</span>
                <button class="btn-save-gift" data-id="${gift.id}" aria-label="Save to Wishlist">
                    ${isSaved ? '⭐️' : '☆'}
                </button>
            </div>
            <h3 class="gift-title">${gift.name}</h3>
            <p class="gift-desc">${gift.desc}</p>
            <div class="gift-footer">
                <div class="gift-footer-row">
                    <span class="gift-price">$${gift.price}</span>
                    <button class="btn-track-action" data-id="${gift.id}">Log & Track</button>
                </div>
                <div class="seller-buttons-tray">
                    ${sellersHTML}
                </div>
            </div>
        `;
        
        // Wishlist button listener
        const saveBtn = card.querySelector('.btn-save-gift');
        saveBtn.addEventListener('click', () => toggleSaveGift(gift, saveBtn));
        
        // Log Tracker listener
        const trackBtn = card.querySelector('.btn-track-action');
        trackBtn.addEventListener('click', () => {
            // Pre-fill manual form and open modal
            document.getElementById('track-gift-title').value = gift.name;
            document.getElementById('track-price').value = gift.price;
            document.getElementById('track-seller').value = gift.sellers[0].name;
            
            // Map occasion parameter
            const selectOccasion = document.getElementById('track-occasion');
            const occasionVal = userSelections.occasion;
            if (occasionVal === 'birthday') selectOccasion.value = "Birthday";
            else if (occasionVal === 'anniversary') selectOccasion.value = "Anniversary";
            else if (occasionVal === 'holiday') selectOccasion.value = "Holiday";
            else if (occasionVal === 'graduation') selectOccasion.value = "Graduation";
            else if (occasionVal === 'housewarming') selectOccasion.value = "Housewarming";
            else selectOccasion.value = "Other";

            modalAddTracker.classList.remove('hidden');
        });

        recommendationsGrid.appendChild(card);
    });
}

// --- Wishlist Management ---
function toggleSaveGift(gift, buttonEl) {
    const index = savedWishlist.findIndex(item => item.id === gift.id);
    if (index === -1) {
        savedWishlist.push(gift);
        buttonEl.textContent = '⭐️';
    } else {
        savedWishlist.splice(index, 1);
        buttonEl.textContent = '☆';
    }
    
    localStorage.setItem('presentperfect_wishlist', JSON.stringify(savedWishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    wishlistCountBadge.textContent = savedWishlist.length;
    wishlistItemsContainer.innerHTML = '';
    
    if (savedWishlist.length === 0) {
        wishlistItemsContainer.appendChild(wishlistEmptyMsg);
        wishlistActionsPanel.classList.add('hidden');
    } else {
        wishlistEmptyMsg.remove();
        wishlistActionsPanel.classList.remove('hidden');
        
        savedWishlist.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('saved-item');
            itemEl.innerHTML = `
                <div class="saved-item-info">
                    <span class="saved-item-title">${item.name}</span>
                    <span class="saved-item-price">$${item.price}</span>
                </div>
                <button class="btn-remove-saved" data-id="${item.id}" aria-label="Remove item">&times;</button>
            `;
            
            itemEl.querySelector('.btn-remove-saved').addEventListener('click', () => {
                savedWishlist = savedWishlist.filter(saved => saved.id !== item.id);
                localStorage.setItem('presentperfect_wishlist', JSON.stringify(savedWishlist));
                updateWishlistUI();
                
                const starBtn = recommendationsGrid.querySelector(`.btn-save-gift[data-id="${item.id}"]`);
                if (starBtn) {
                    starBtn.textContent = '☆';
                }
            });
            
            wishlistItemsContainer.appendChild(itemEl);
        });
    }
}

// --- Gifting Tracker Engine ---
function updateTrackerUI() {
    // Calculate total spent
    const totalSpent = trackedGifts.reduce((sum, item) => sum + item.price, 0);
    const remainingBudget = campaignBudget - totalSpent;
    const wrappedCount = trackedGifts.filter(item => item.status === 'Wrapped' || item.status === 'Delivered').length;
    
    // Update summary labels
    trackerTotalSpent.textContent = `$${totalSpent.toFixed(2)}`;
    trackerRemainingBudget.textContent = `$${remainingBudget.toFixed(2)}`;
    
    // Change remaining budget text color if over budget
    if (remainingBudget < 0) {
        trackerRemainingBudget.style.color = 'var(--terracotta)';
    } else {
        trackerRemainingBudget.style.color = '';
    }

    trackerWrappedCount.textContent = `${wrappedCount} / ${trackedGifts.length} Items`;
    
    // Clear and draw table
    trackerTableBody.innerHTML = '';
    
    if (trackedGifts.length === 0) {
        trackerEmptyState.classList.remove('hidden');
        trackerTableBody.appendChild(trackerEmptyState);
        btnExportCSV.setAttribute('disabled', 'true');
    } else {
        trackerEmptyState.classList.add('hidden');
        btnExportCSV.removeAttribute('disabled');
        
        trackedGifts.forEach((item, index) => {
            const row = document.createElement('tr');
            
            // Map status CSS class
            let statusClass = 'status-planned';
            if (item.status === 'Ordered') statusClass = 'status-ordered';
            else if (item.status === 'Wrapped') statusClass = 'status-wrapped';
            else if (item.status === 'Delivered') statusClass = 'status-delivered';

            row.innerHTML = `
                <td><strong>${escapeHTML(item.recipient)}</strong></td>
                <td>${escapeHTML(item.occasion)}</td>
                <td>${escapeHTML(item.title)}</td>
                <td><strong>$${item.price.toFixed(2)}</strong></td>
                <td>${escapeHTML(item.seller)}</td>
                <td>
                    <select class="status-select ${statusClass}" data-id="${item.id}">
                        <option value="Planned" ${item.status === 'Planned' ? 'selected' : ''}>Planned</option>
                        <option value="Ordered" ${item.status === 'Ordered' ? 'selected' : ''}>Ordered / Shipped</option>
                        <option value="Wrapped" ${item.status === 'Wrapped' ? 'selected' : ''}>Wrapped & Ready</option>
                        <option value="Delivered" ${item.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </td>
                <td style="text-align: right;">
                    <button class="btn-delete-row" data-id="${item.id}" aria-label="Delete log">&times;</button>
                </td>
            `;
            
            // Inline status change listener
            const selectEl = row.querySelector('.status-select');
            selectEl.addEventListener('change', (e) => {
                const newStatus = e.target.value;
                item.status = newStatus;
                
                // Save and recalculate
                localStorage.setItem('presentperfect_tracked_gifts', JSON.stringify(trackedGifts));
                updateTrackerUI();
                showToast(`Status updated to: ${newStatus}`);
            });

            // Delete action
            row.querySelector('.btn-delete-row').addEventListener('click', () => {
                trackedGifts = trackedGifts.filter(g => g.id !== item.id);
                localStorage.setItem('presentperfect_tracked_gifts', JSON.stringify(trackedGifts));
                updateTrackerUI();
                showToast("Item deleted from dashboard.");
            });

            trackerTableBody.appendChild(row);
        });
    }
}

// --- CSV Exporter ---
function exportTrackerToCSV() {
    if (trackedGifts.length === 0) return;
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Recipient,Occasion,Gift Item,Price Paid,Seller,Status\n";
    
    trackedGifts.forEach(item => {
        const row = [
            `"${item.recipient.replace(/"/g, '""')}"`,
            `"${item.occasion.replace(/"/g, '""')}"`,
            `"${item.title.replace(/"/g, '""')}"`,
            `"${item.price.toFixed(2)}"`,
            `"${item.seller.replace(/"/g, '""')}"`,
            `"${item.status.replace(/"/g, '""')}"`
        ].join(',');
        csvContent += row + "\n";
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `PresentPerfect_Gifting_Tracker_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("CSV file downloaded! 📊");
}

// --- Toast and Notifications ---
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove('hidden');
    
    setTimeout(() => {
        toastEl.classList.add('hidden');
    }, 2000);
}

// --- Shared Wishlist Link generator ---
function getShareableWishlistLink() {
    if (savedWishlist.length === 0) return window.location.origin;
    const itemIds = savedWishlist.map(item => item.id).join(',');
    return `${window.location.origin}${window.location.pathname}?wishlist=${encodeURIComponent(itemIds)}`;
}

// --- Shared Wishlist Links import ---
function loadSharedWishlistFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedIds = urlParams.get('wishlist');
    
    if (sharedIds) {
        const idsArray = sharedIds.split(',');
        const matchedItems = giftDatabase.filter(gift => idsArray.includes(gift.id));
        
        if (matchedItems.length > 0) {
            matchedItems.forEach(item => {
                if (!savedWishlist.some(saved => saved.id === item.id)) {
                    savedWishlist.push(item);
                }
            });
            
            localStorage.setItem('presentperfect_wishlist', JSON.stringify(savedWishlist));
            updateWishlistUI();
            
            wishlistDrawer.classList.add('open');
            window.history.replaceState({}, document.title, window.location.pathname);
            showToast(`Imported ${matchedItems.length} items to your wishlist! ✨`);
        }
    }
}

// Helper utility
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
