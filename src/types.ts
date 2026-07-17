export interface Product {
  id: string;
  name: string;
  price: number; // in IDR (Rupiah)
  description: string;
  category: 'coffee-beans' | 'espresso' | 'manual-brew' | 'cold-brew';
  rating: number;
  image: string;
  origin: string; // e.g., "Gayo, Aceh", "Lampung"
  roastLevel?: 'Light' | 'Light-Medium' | 'Medium' | 'Medium-Dark' | 'Dark';
  notes?: string[]; // taste notes, e.g., ["Chocolate", "Spiced", "Nutty"]
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  role: string; // e.g., "Kopi Enthusiast", "Student", "Tourist"
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Coffee Tips' | 'Brewing Guide' | 'Coffee Beans' | 'Lifestyle';
  date: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'atmosphere' | 'brewing' | 'beans' | 'pastries';
  aspectRatio: 'aspect-square' | 'aspect-video' | 'aspect-[3/4]' | 'aspect-[4/3]';
}
