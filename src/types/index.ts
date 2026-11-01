export type Currency = 'PKR' | 'USD' | 'GBP' | 'AED';

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: 'embroidered-sets' | 'heritage-dresses' | 'scarves' | 'artisan-accessories' | 'occasion-wear' | 'handcrafted';
  pricePKR: number;
  rating: number;
  reviewCount: number;
  image: string;
  secondaryImage?: string;
  description: string;
  fabric: string;
  technique: string;
  artisanRegion: string;
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Artisan {
  id: string;
  name: string;
  craftSpecialty: string;
  location: string;
  experienceYears: number;
  image: string;
  bio: string;
  quote: string;
  signatureTechniques: string[];
}

export interface CategoryItem {
  id: string;
  title: string;
  slug: Product['categorySlug'];
  itemCount: number;
  image: string;
  description: string;
}

export interface StylingLook {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  recommendedProducts: string[];
  stylingTips: string[];
  occasion: string;
}

export interface FabricInfo {
  id: string;
  name: string;
  origin: string;
  description: string;
  characteristics: string[];
  bestFor: string;
}
