import { Product, Review, BlogPost, FAQItem, ProcessStep, GalleryItem } from './types';

export const products: Product[] = [
  {
    id: 'prod-gayo-arabica',
    name: 'Arabica Gayo Premium',
    price: 95000,
    description: 'Single-origin Arabica from the high slopes of Gayo, Aceh. Grown at 1,400m altitude, resulting in a complex body with subtle hints of black tea, citrus brightness, and a clean, chocolaty finish.',
    category: 'coffee-beans',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600',
    origin: 'Takengon, Aceh Gayo',
    roastLevel: 'Medium',
    notes: ['Black Tea', 'Citrus', 'Chocolate', 'Floral']
  },
  {
    id: 'prod-lampung-robusta',
    name: 'Robusta Lampung Gold',
    price: 65000,
    description: 'Authentic Robusta from the volcanic soil of Lampung, Sumatra. Features a bold, full-bodied cup with a deep, dark cocoa aroma, nutty sweetness, and low acidity. Perfect for traditional kopi tubruk or espresso.',
    category: 'coffee-beans',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
    origin: 'Tanggamus, Lampung',
    roastLevel: 'Medium-Dark',
    notes: ['Dark Chocolate', 'Roasted Peanut', 'Caramel', 'Spicy']
  },
  {
    id: 'prod-toraja-sapan',
    name: 'Arabica Toraja Sapan',
    price: 110000,
    description: 'Grown in the high valleys of Tana Toraja, Sulawesi. Sourced from smallholder cooperative farmers. Exhibits a rich, velvety body, sweet spicy aroma, and tasting notes of dark cherry, cedar wood, and cinnamon.',
    category: 'coffee-beans',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    origin: 'Sapan, Tana Toraja',
    roastLevel: 'Medium',
    notes: ['Dark Cherry', 'Cedar Wood', 'Cinnamon', 'Brown Sugar']
  },
  {
    id: 'prod-bali-kintamani',
    name: 'Arabica Bali Kintamani',
    price: 98000,
    description: 'Unique Arabica beans cultivated alongside citrus orchards in Bali. Processed using the wet-hulled method, offering a distinctive, refreshing orange-like acidity, clean taste, and sweet honeyed notes.',
    category: 'coffee-beans',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    origin: 'Kintamani, Bali',
    roastLevel: 'Light-Medium',
    notes: ['Orange Peel', 'Honey', 'Lemongrass', 'Crisp Apple']
  },
  {
    id: 'prod-gayo-v60',
    name: 'V60 Pour Over (Gayo)',
    price: 32000,
    description: 'Hand-brewed single-origin Arabica Gayo using the classic Hario V60 paper filter method. Accentuates the light body, bright floral notes, and clean tea-like finish of the coffee.',
    category: 'manual-brew',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    origin: 'Takengon, Aceh Gayo',
    notes: ['Bright Citrus', 'Floral', 'Jasmine Tea']
  },
  {
    id: 'prod-cold-brew-signature',
    name: 'Signature Cold Brew',
    price: 35000,
    description: 'Steeped cold for 18 hours using a custom blend of Kintamani and Toraja beans. Extremely smooth, sweet, naturally low in acidity, and served over ice.',
    category: 'cold-brew',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600',
    origin: 'House Blend (Bali & Toraja)',
    notes: ['Cocoa Nibs', 'Molasses', 'Smooth Body']
  },
  {
    id: 'prod-double-espresso',
    name: 'Espresso Double Shot',
    price: 25000,
    description: 'Concentrated extraction using our house blend of 70% Gayo Arabica and 30% Lampung Robusta. Thick, golden crema with a powerful, lingering sweet chocolatey finish.',
    category: 'espresso',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-151097252790b-af4f90267301?auto=format&fit=crop&q=80&w=600',
    origin: 'Nusantara Espresso Blend',
    notes: ['Intense Cocoa', 'Creamy Crema', 'Toasted Nuts']
  },
  {
    id: 'prod-palm-sugar-latte',
    name: 'Kopi Susu Gula Aren',
    price: 28000,
    description: 'A beloved Indonesian classic. Creamy espresso latte sweetened with authentic organic local palm sugar (Gula Aren) from organic producers in West Java.',
    category: 'espresso',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    origin: 'Espresso Blend & West Java Aren',
    notes: ['Creamy Milk', 'Caramelized Sugar', 'Smooth Espresso']
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Budi Santoso',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Kopi Nusantara is a gem! Their Arabica Gayo has become my daily driver for home brewing. The beans are incredibly fresh and the roasting consistency is Apple-level. Highly recommended for any true coffee lover!',
    role: 'Home Barista & Coffee Enthusiast'
  },
  {
    id: 'rev-2',
    name: 'Sarah Wijaya',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'The Kopi Susu Gula Aren is perfectly balanced—not overly sweet, and the premium espresso really cuts through the milk. It has become my go-to order during remote work sessions. A very cozy and inspiring place too!',
    role: 'Creative Designer & Freelancer'
  },
  {
    id: 'rev-3',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'As a tourist visiting Indonesia, I wanted to experience genuine local single-origin coffees. The barista here explained the different coffee regions so passionately. The Toraja Sapan V60 was absolute heaven. Captivating aroma!',
    role: 'Travel Vlogger & Tourist'
  },
  {
    id: 'rev-4',
    name: 'Amara Putri',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'The customer service is outstanding. They helped me choose the right grind size for my French Press at home. Sourcing directly from local farmers and supporting sustainability makes me love this brand even more.',
    role: 'University Student & Nature Advocate'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'A Beginner Guide to V60 Pour Over Coffee at Home',
    excerpt: 'Unlock clean, complex flavors of Indonesian single-origin beans with our step-by-step classic Hario V60 brewing guide.',
    content: `Brewing coffee using a manual pour-over method like the Hario V60 is one of the best ways to highlight the delicate, complex flavors of high-quality single-origin beans. Unlike automatic machines, the V60 allows you to control variables like water temperature, pour rate, and extraction time to customize your cup to perfection. Here is our master brewing guide tailored specifically for Indonesian single-origin beans like Arabica Gayo or Bali Kintamani.

### What You Will Need:
1. **Fresh Coffee Beans**: 15 grams (medium grind, resembling sea salt).
2. **Filtered Hot Water**: 225 grams (ideal temperature: 90°C to 93°C).
3. **V60 Dripper & Paper Filter**.
4. **Gooseneck Kettle**: Crucial for a controlled, steady pour.
5. **Kitchen Scale & Timer**.

### The Golden Ratio:
We recommend a **1:15 brewing ratio** (1 gram of coffee to 15 grams of water). For a single cup, 15 grams of coffee to 225 grams of water is absolute perfection.

### Step-by-Step Instructions:

#### Step 1: Prep and Rinse
Place the paper filter in your V60 dripper and set it over your mug or server. Rinse the filter thoroughly with hot water. This removes any woody, paper taste and warms your brewing equipment. Discard the rinse water from the server.

#### Step 2: Add Coffee Ground
Add your 15g of freshly ground coffee. Gently tap the dripper to level the coffee bed. Place your entire setup on the scale, tare it to zero, and start your timer.

#### Step 3: The Bloom (0:00 - 0:45)
Pour 30-40 grams of water evenly over the coffee bed. Ensure all grounds are thoroughly saturated. Let it rest for 40 seconds. You will see bubbles rising—this is "blooming," where the coffee releases trapped carbon dioxide gas, allowing for a much cleaner extraction.

#### Step 4: The Second Pour (0:45 - 1:30)
In a slow, concentric circular motion (starting from the center and moving outwards, avoiding the paper filter edge), pour water until your scale reads **130 grams**. Keep your kettle close to the bed to prevent heat loss.

#### Step 5: The Final Pour (1:30 - 2:30)
Once the water level drains halfway down, pour slowly in circular motions again until you reach the final target of **225 grams**. Give the dripper a gentle swirl to create a flat, uniform bed. Let the coffee drip completely. Your total brew time should be between 2:30 and 3:00 minutes.

#### Step 6: Serve and Experience
Remove the dripper, swirl your freshly brewed server to aerate the coffee, and pour. Let it cool slightly before sipping—Indonesian coffees like Gayo or Bali Kintamani display their beautiful sweet, fruity, and citrus undertones much better as they approach lukewarm temperature! Enjoy your masterpiece!`,
    category: 'Brewing Guide',
    date: 'July 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    slug: 'guide-v60-pour-over-at-home',
    tags: ['V60', 'Manual Brew', 'Coffee Tips', 'At Home']
  },
  {
    id: 'blog-2',
    title: 'Understanding the Unique Flavor Profiles of Indonesian Coffee Regions',
    excerpt: 'From the earthy notes of Sumatra to the citrus tones of Bali, explore why Indonesia produces some of the most diverse coffee profiles on earth.',
    content: `Indonesia is a spectacular archipelago comprising over 17,000 islands, stretching across the equator. This unique geography, combined with volcanic soils, high altitudes, and distinct microclimates, makes Indonesia one of the most prolific and diverse coffee-growing countries in the world. 

For centuries, Indonesian coffees have been celebrated for their full bodies, low acidity, and rich, deep flavors. However, as the specialty coffee movement continues to grow, we are discovering that the country’s distinct coffee regions offer an incredibly vast range of flavor profiles—from earthy and herbal to bright, sweet, and citrusy. Let's travel across the islands to understand what makes each region’s beans so unique.

### 1. Sumatra (Gayo & Mandheling): Earthy, Bold, and Complex
Sumatra is perhaps the most famous Indonesian coffee-producing region. Sumatran coffee is deeply tied to a traditional processing method called **"Giling Basah"** (Wet Hulled). In this process, the parchment is removed from the bean at a much higher moisture level than usual.
* **Tasting Notes**: Cedar wood, dark cocoa, herbal spice, pipe tobacco, and an incredibly thick, heavy body with low acidity.
* **Best Savoring Method**: Traditional espresso or rich French Press.

### 2. Bali Kintamani: Citrusy, Clean, and Sweet
In stark contrast to Sumatra, coffee grown on the highlands of Kintamani in Bali is bright and clean. Farmers in Bali utilize the traditional Hindu agricultural philosophy of **"Subak Abian"**, which fosters ecological balance and sustainable farming. Coffee is often grown under canopy shade alongside citrus trees, orange groves, and cacao.
* **Tasting Notes**: Refreshing orange and grapefruit acidity, sweet honey notes, light tea-like body, and floral fragrance.
* **Best Savoring Method**: Hario V60 or iced pourover.

### 3. Sulawesi Toraja: Velvety, Fruity, and Spicy
Grown in the rugged volcanic mountains of Tana Toraja, this coffee is cultivated in very high altitudes by smallholder families. Toraja coffee beans undergo both wet-hulled and fully washed processing, giving them a very distinct sweet, spiced, and fruit-forward flavor profile.
* **Tasting Notes**: Deep notes of ripe dark cherries, cinnamon, cardamom, molasses, and a silky, velvety mouthfeel.
* **Best Savoring Method**: AeroPress or Syphon brew.

### 4. Java (Preanger): Sweet, Chocolaty, and Herbal
Java has a rich history—so much so that "Java" became synonymous with coffee itself. Modern specialty coffee from West Java (often referred to as Java Preanger) is grown at high elevations and is fully washed, yielding a highly refined, sweeter, and cleaner profile than traditional Java coffees.
* **Tasting Notes**: Jasmine, red apple, caramel sweetness, subtle black tea notes, and a clean chocolate finish.
* **Best Savoring Method**: V60 Pour Over or clean drip.

At **Kopi Nusantara**, we are proud to partner directly with local smallholders on these magnificent islands, ensuring that every single-origin bag is freshly roasted to respect and celebrate its authentic regional heritage.`,
    category: 'Coffee Beans',
    date: 'June 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    slug: 'flavor-profiles-indonesian-coffee-regions',
    tags: ['Origins', 'Sumatra Gayo', 'Bali Kintamani', 'Toraja', 'Education']
  },
  {
    id: 'blog-3',
    title: 'The Sustainable Farmer-Direct Sourcing Movement in Indonesia',
    excerpt: 'How direct trade and transparent partnerships with local Indonesian smallholders are changing the coffee industry and elevating quality.',
    content: `The specialty coffee industry is going through a beautiful transformation. Today, coffee is no longer just viewed as a bulk commodity on a shelf; it is celebrated as an artisanal product, much like fine wine. At the core of this specialty revolution is **sustainability** and **direct trade**—a sourcing philosophy that connects consumers directly with the farmers who lovingly grow the beans.

At Kopi Nusantara, direct sourcing is not just a marketing slogan; it is our foundational philosophy. Let's look at why direct farmer partnerships are essential for the future of Indonesian coffee and how they benefit everyone from the farm to your morning cup.

### Why Direct Sourcing Matters in Indonesia

#### 1. Economic Empowerment and Fair Compensation
Traditional coffee supply chains often involve multiple intermediaries or "middlemen." This dilutes the profits, leaving smallholder farmers with very little of the final retail value of their harvest. By bypassing these middlemen, we buy directly from local cooperatives and family farmers in Takengon, Kintamani, and Tanggamus. We pay prices well above the global Fairtrade minimums, ensuring that farmers can earn a dignified living, reinvest in their land, and pay fair wages to their pickers.

#### 2. Driving Uncompromising Quality
High-quality coffee requires extreme attention to detail. Beans must be picked at the absolute peak of ripeness (only red cherries), sorted meticulously, and processed with scientific precision. When we build long-term personal relationships with farmers, we can collaborate with them. We help fund equipment like drying beds, solar domes, or fermentation tanks, and in return, we receive the absolute finest specialty microlots of the harvest.

#### 3. Environmental Stewardship and Shade Grown Sourcing
Sustainable farming preserves the earth for future generations. Our partner farmers practice **shade-grown agroforestry**, cultivating coffee plants under the canopy of native trees like avocado, banana, and citrus. This protects local bird habitats, prevents soil erosion, retains natural soil moisture, and eliminates the need for chemical fertilizers.

### From Our Farmers to Your Cup
When you sit in Kopi Nusantara and enjoy a V60 Pour Over of Bali Kintamani or purchase a bag of Arabica Gayo, you are directly supporting a network of over 150 local farming families across the Indonesian archipelago. You are ensuring that sustainable mountain farming traditions thrive, and that the hard work of Indonesian farmers is celebrated and compensated fairly.

That is the true spirit of **Kopi Nusantara**—brewing fresh connections, celebrating local heritage, and crafting premium cups with social impact.`,
    category: 'Lifestyle',
    date: 'June 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    slug: 'sustainable-farmer-direct-sourcing',
    tags: ['Sustainability', 'Direct Trade', 'Local Farmers', 'Social Impact']
  }
];

export const FAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you source your coffee beans?',
    answer: 'We source 100% of our beans directly from smallholder coffee farmers and local cooperatives across Indonesia, including Aceh Gayo, Lampung, Tana Toraja, and Bali Kintamani. This direct-trade model ensures that we pay premium prices above fair-trade standards, supporting sustainable farming practices and local communities.',
    category: 'Sourcing & Ethics'
  },
  {
    id: 'faq-2',
    question: 'How fresh are the coffee beans you sell?',
    answer: 'Extremely fresh! We roast our single-origin beans in small batches in-house multiple times a week. Every bag of coffee beans is clearly stamped with its exact roast date. We recommend resting the beans for 5-7 days post-roast and consuming them within 4-6 weeks for peak aromatic extraction.',
    category: 'Product Details'
  },
  {
    id: 'faq-3',
    question: 'How can I place an online order for delivery?',
    answer: 'You can order through our interactive online menu on this website! Simply browse our products, add them to your cart, and click checkout. It will generate a prefilled, structured order message that you can send directly to our official WhatsApp. Our team will immediately calculate delivery fees, share payment details, and dispatch your fresh coffee or beans!',
    category: 'Online Ordering'
  },
  {
    id: 'faq-4',
    question: 'Do you offer whole bean coffee or pre-ground?',
    answer: 'We offer both! When ordering online or in-store, you can choose "Whole Beans" or specify your preferred grind size (Coarse for French Press/Cold Brew, Medium for V60/Paper Filter, Fine for Espresso/Moka Pot, or Super Fine for traditional Kopi Tubruk). We grind them fresh at the moment of packaging.',
    category: 'Product Details'
  },
  {
    id: 'faq-5',
    question: 'What is your address, and do you have power outlets and high-speed Wi-Fi?',
    answer: 'Yes! Our roastery and cafe are designed to be extremely comfortable for remote workers and students. We have fast fiber-optic Wi-Fi, plenty of power outlets at every single table, cozy seating, and a clean, minimalist design. We are located at Jl. Kelapa Dua No. 45, Kebon Jeruk, Jakarta Barat, open daily from 08:00 AM to 10:00 PM.',
    category: 'Cafe Atmosphere'
  },
  {
    id: 'faq-6',
    question: 'Do you offer roasting customization or wholesale partnerships?',
    answer: 'Absolutely! We offer wholesale accounts for offices, hotels, and other cafes, complete with custom roasting profiles and barista training. Please contact us via our email (wholesale@kopinusantara.com) or phone (+62 812-3456-7890) to discuss a customized partnership.',
    category: 'Partnerships'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Ethical Sourcing & Hand-Picking',
    description: 'We collaborate directly with local farmers in Sumatra, Sulawesi, Java, and Bali. During harvest, only the deep-red, fully ripe coffee cherries are carefully picked by hand to guarantee maximum sweetness and quality.',
    iconName: 'Sprout',
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: 2,
    title: 'Artisanal Small-Batch Roasting',
    description: 'Our beans are roasted right here in-house in small batches by our certified roastmasters. We carefully adjust the heat profile for every single microlot to highlight its authentic, native regional flavor notes.',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: 3,
    title: 'Meticulous Fresh Packaging',
    description: 'To preserve the complex aromas, roasted beans are immediately sealed in multi-layer aluminum bags equipped with one-way degassing valves and zip-locks, and stamped with the exact roast date.',
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: 4,
    title: 'Masterful Professional Serving',
    description: 'Whether it is a rich espresso extracted at 9 bars of pressure or a delicate V60 manual pour-over, our expert baristas craft and serve each cup with absolute precision and warm Indonesian hospitality.',
    iconName: 'CupSoda',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600',
    title: 'Aesthetic Modern Cafe Corner',
    category: 'atmosphere',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    title: 'V60 Pour Over In Action',
    category: 'brewing',
    aspectRatio: 'aspect-square'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    title: 'Fresh Latte Art',
    category: 'brewing',
    aspectRatio: 'aspect-video'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    title: 'Our Specialty Green Beans',
    category: 'beans',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600',
    title: 'Roasted Coffee Beans',
    category: 'beans',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
    title: 'Barista Espresso Extraction',
    category: 'brewing',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'gal-7',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
    title: 'Minimalist Dining Area',
    category: 'atmosphere',
    aspectRatio: 'aspect-square'
  },
  {
    id: 'gal-8',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    title: 'House-made Butter Croissants',
    category: 'pastries',
    aspectRatio: 'aspect-[3/4]'
  }
];
