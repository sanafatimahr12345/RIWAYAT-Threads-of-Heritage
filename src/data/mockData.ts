import { Product, Artisan, CategoryItem, StylingLook, FabricInfo, Currency } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_pakistani_fashion_1793521908725.jpg';
export const FABRIC_FOCUS_IMAGE = '/src/assets/images/fabric_focus_luxury_1793521909089.jpg';
export const SUMMER_CAMPAIGN_IMAGE = '/src/assets/images/summer_heritage_campaign_1793521909594.jpg';
export const ARTISAN_MASTER_IMAGE = '/src/assets/images/artisan_craftsman_master_1793521910014.jpg';
export const STYLING_FESTIVE_IMAGE = '/src/assets/images/styling_festive_wear_1793521909170.jpg';

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'cat-1',
    title: 'Embroidered Sets',
    slug: 'embroidered-sets',
    itemCount: 28,
    image: SUMMER_CAMPAIGN_IMAGE,
    description: 'Intricate floral and geometric needlework on fine woven lawn and chanderi.'
  },
  {
    id: 'cat-2',
    title: 'Heritage Dresses',
    slug: 'heritage-dresses',
    itemCount: 19,
    image: HERO_IMAGE,
    description: 'Timeless Anarkalis, Peshwas, and Kalidar silhouettes inspired by royal courts.'
  },
  {
    id: 'cat-3',
    title: 'Scarves & Dupattas',
    slug: 'scarves',
    itemCount: 34,
    image: FABRIC_FOCUS_IMAGE,
    description: 'Handwoven Jamdani, organza, crushed silk, and block-printed heirloom drapes.'
  },
  {
    id: 'cat-4',
    title: 'Artisan Accessories',
    slug: 'artisan-accessories',
    itemCount: 22,
    image: ARTISAN_MASTER_IMAGE,
    description: 'Hand-beaded zardozi potlis, embroidered clutches, and antique brass accents.'
  },
  {
    id: 'cat-5',
    title: 'Occasion Wear',
    slug: 'occasion-wear',
    itemCount: 16,
    image: STYLING_FESTIVE_IMAGE,
    description: 'Regal velvet, raw silk, and antique metallic gotta work for weddings and soirées.'
  },
  {
    id: 'cat-6',
    title: 'Handcrafted Pieces',
    slug: 'handcrafted',
    itemCount: 25,
    image: FABRIC_FOCUS_IMAGE,
    description: 'One-of-a-kind bespoke creations dyed with natural madder and indigo.'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Floral Embroidered Lawn Suit',
    category: 'Embroidered Sets',
    categorySlug: 'embroidered-sets',
    pricePKR: 18500,
    rating: 4.9,
    reviewCount: 42,
    image: SUMMER_CAMPAIGN_IMAGE,
    secondaryImage: HERO_IMAGE,
    description: 'A masterpiece in fine 80s count lawn featuring delicate Kashmiri floral threadwork across the neckline, hemline, and sleeves. Accompanied by a lightweight printed chiffon dupatta and tailored cambric trousers.',
    fabric: '100% Superfine Cotton Lawn & Pure Chiffon',
    technique: 'Fine Taanka & Resham Threadwork',
    artisanRegion: 'Lahore & Faisalabad Ateliers',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    badge: 'Bestseller'
  },
  {
    id: 'prod-2',
    name: 'Heritage Block Print Anarkali',
    category: 'Heritage Dresses',
    categorySlug: 'heritage-dresses',
    pricePKR: 24900,
    rating: 5.0,
    reviewCount: 29,
    image: HERO_IMAGE,
    secondaryImage: STYLING_FESTIVE_IMAGE,
    description: 'A 24-kali flared Anarkali silhouette hand-stamped using hand-carved teakwood blocks. Dyed in organic madder root and indigo with subtle antique sitara highlights on the bodice.',
    fabric: 'Pure Mulberry Chanderi & Mulmul Silk',
    technique: 'Traditional Hand Block Print & Sitara Tanka',
    artisanRegion: 'Bhit Shah, Sindh',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    badge: 'Artisan Edition'
  },
  {
    id: 'prod-3',
    name: 'Handwoven Jamdani Dupatta',
    category: 'Scarves & Dupattas',
    categorySlug: 'scarves',
    pricePKR: 12200,
    rating: 4.8,
    reviewCount: 35,
    image: FABRIC_FOCUS_IMAGE,
    secondaryImage: SUMMER_CAMPAIGN_IMAGE,
    description: 'Woven on indigenous wooden pit looms over 45 days. Discontinuous weft motifs of Mughal bootis appear suspended on an ethereal translucent cotton-silk base, finished with hand-knotted zari tassels.',
    fabric: 'Hand-Spun Cotton-Silk Blend',
    technique: 'Discontinuous Weft Jamdani Weave',
    artisanRegion: 'Multan, South Punjab',
    sizes: ['M'],
    inStock: true,
    featured: true,
    badge: 'Handloom Exclusive'
  },
  {
    id: 'prod-4',
    name: 'Zardozi Potli Bag',
    category: 'Artisan Accessories',
    categorySlug: 'artisan-accessories',
    pricePKR: 8500,
    rating: 4.9,
    reviewCount: 56,
    image: ARTISAN_MASTER_IMAGE,
    secondaryImage: STYLING_FESTIVE_IMAGE,
    description: 'A celebration of Mughal court luxury. Heavy copper-gold dabka wire, semi-precious beads, and seed pearls hand-embellished onto rich ivory velvet with a pearl-strung drawstring handle.',
    fabric: 'Micro-Velvet with Pure Silk Lining',
    technique: 'Zardozi & Dabka Wire Embroidery',
    artisanRegion: 'Walled City of Lahore',
    sizes: ['S'],
    inStock: true,
    featured: true,
    badge: 'Heirloom Piece'
  },
  {
    id: 'prod-5',
    name: 'Embroidered Organza Kameez',
    category: 'Occasion Wear',
    categorySlug: 'occasion-wear',
    pricePKR: 21000,
    rating: 4.9,
    reviewCount: 31,
    image: STYLING_FESTIVE_IMAGE,
    secondaryImage: HERO_IMAGE,
    description: 'A structured high-neck kameez in crisp translucent tissue organza adorned with tone-on-tone French knots, scalloped lace cutwork borders, and soft gold marori detailing.',
    fabric: 'Tissue Organza with Raw Silk Slip',
    technique: 'Marori Work & Scalloped Cutwork',
    artisanRegion: 'Peshawar Heritage Cluster',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    badge: 'Limited Run'
  },
  {
    id: 'prod-6',
    name: 'Maroon Velvet Peshwas Gown',
    category: 'Occasion Wear',
    categorySlug: 'occasion-wear',
    pricePKR: 34500,
    rating: 5.0,
    reviewCount: 18,
    image: STYLING_FESTIVE_IMAGE,
    secondaryImage: FABRIC_FOCUS_IMAGE,
    description: 'A regal floor-length Peshwas in plush deep maroon micro-velvet. Accented with antique gotta patti borders, hand-embroidered neckline medallions, and a crushed copper organza dupatta.',
    fabric: 'Plush Micro-Velvet & Tissue Organza',
    technique: 'Gotta Kinari & Zari Jaal Work',
    artisanRegion: 'Old Lahore Crafts Quarter',
    sizes: ['S', 'M', 'L'],
    inStock: true,
    featured: false,
    badge: 'Regal Formal'
  }
];

export const ARTISANS_DATA: Artisan[] = [
  {
    id: 'artisan-1',
    name: 'Ustad Muhammad Rafiq',
    craftSpecialty: 'Master Zardozi & Ari Needlework',
    location: 'Walled City of Lahore',
    experienceYears: 42,
    image: ARTISAN_MASTER_IMAGE,
    bio: 'Carrying forward a fourth-generation lineage of royal court embellishers. Ustad Rafiq leads a guild of 35 skilled craftspeople, training young artisans in the preservation of heritage copper wire dabka work and intricate marori stitchcraft.',
    quote: 'When the needle pierces raw silk, it carries four centuries of memories. We do not merely sew; we carve stories that will outlive us.',
    signatureTechniques: ['Mughal Dabka Wire', 'French Knots', 'Gotta Patti Jaal', 'Antique Sitara']
  },
  {
    id: 'artisan-2',
    name: 'Mai Zainab Sindhi',
    craftSpecialty: 'Ajrak & Natural Resist Block Printing',
    location: 'Bhit Shah, Sindh',
    experienceYears: 34,
    image: FABRIC_FOCUS_IMAGE,
    bio: 'A revered master dyer who works exclusively with natural river clays, pomegranate rind, alum, and fermented natural indigo. Her 21-step resist-dye process takes up to four weeks per garment and maintains zero-chemical environmental purity.',
    quote: 'The Indus river water and desert sun are our true dyes. Each block mark honors the geometry of our Sufi shrines.',
    signatureTechniques: ['21-Stage Teli Ajrak', 'Indigo Resist Bath', 'Carved Sheesham Blocks', 'Sun Bleaching']
  },
  {
    id: 'artisan-3',
    name: 'Gul Bano & Parveen Akhtar',
    craftSpecialty: 'Jamdani & Fine Khaddi Handloom Weaving',
    location: 'Multan, South Punjab',
    experienceYears: 28,
    image: SUMMER_CAMPAIGN_IMAGE,
    bio: 'Sisters who inherited the fragile art of pit-loom Jamdani weaving from their grandmother. They weave ethereal translucent gossamer dupattas where decorative supplementary wefts are inserted entirely by hand with bamboo spools.',
    quote: 'Our hands know the count of every cotton thread before our eyes can even spot it. Pure handloom breathes with the wearer.',
    signatureTechniques: ['Wooden Pit Looms', 'Bamboo Spool Jamdani', 'Organic Khaddi Weave', 'Zari Border Tassels']
  }
];

export const STYLING_GUIDE_DATA: StylingLook[] = [
  {
    id: 'style-1',
    title: 'Everyday Elegance',
    tagline: 'Effortless daytime poise with breathable hand-embroidery',
    description: 'Pair a breezy pure lawn kurta with cropped cambric trousers, leather khussas, and delicate freshwater pearl studs. The look feels light in midday heat yet distinctly elevated.',
    image: SUMMER_CAMPAIGN_IMAGE,
    recommendedProducts: ['Floral Embroidered Lawn Suit', 'Handwoven Jamdani Dupatta'],
    stylingTips: [
      'Let one delicate threadwork motif be the focal point.',
      'Drape the dupatta casually over one shoulder for effortless movement.',
      'Opt for nude or terracotta block heels or handcrafted khussas.'
    ],
    occasion: 'High Tea, Art Exhibitions & Daytime Gatherings'
  },
  {
    id: 'style-2',
    title: 'Festive Favorites',
    tagline: 'Vibrant jewel tones, antique sitara & celebratory flair',
    description: 'Embrace the joy of festive festivities with hand-stamped block print kalis, paired with a glowing mustard or crimson tissue dupatta and antique jhumkas.',
    image: HERO_IMAGE,
    recommendedProducts: ['Heritage Block Print Anarkali', 'Zardozi Potli Bag'],
    stylingTips: [
      'Contrast rich mustard or terracotta with emerald or deep teal jewelry.',
      'Add a delicate waist tie to accentuate the voluminous kali flare.',
      'Carry a matching hand-beaded zardozi potli bag.'
    ],
    occasion: 'Eid Celebrations, Dholaks & Milad Gatherings'
  },
  {
    id: 'style-3',
    title: 'Wedding Guest Looks',
    tagline: 'Majestic organza, zardozi gold wire & opulent velvet accents',
    description: 'Channel regal court silhouettes with a dramatic peshwas or embroidered organza kameez. Layer with fine antique polki jewelry and an intricately detailed clutch.',
    image: STYLING_FESTIVE_IMAGE,
    recommendedProducts: ['Embroidered Organza Kameez', 'Maroon Velvet Peshwas Gown', 'Zardozi Potli Bag'],
    stylingTips: [
      'Pin the sheer organza dupatta gracefully across both forearms.',
      'Choose a sleek bun adorned with fresh motia (jasmine) flowers.',
      'Finish with antique burnished gold chandbalis.'
    ],
    occasion: 'Barat, Shendi & Grand Receptions'
  },
  {
    id: 'style-4',
    title: 'Layer with Scarves',
    tagline: 'Transform any neutral base with an heirloom dupatta',
    description: 'Transform an understated monochrome ivory or black suit into an unforgettable ensemble by draping an authentic handwoven Multani Jamdani or ajrak stole.',
    image: FABRIC_FOCUS_IMAGE,
    recommendedProducts: ['Handwoven Jamdani Dupatta', 'Floral Embroidered Lawn Suit'],
    stylingTips: [
      'Pleat neatly across the chest for structured formal occasions.',
      'Belt loosely around the waist over an unadorned silk tunic.',
      'Allow the hand-tied zari tassels to fall freely at the edge.'
    ],
    occasion: 'Evening Dinners, Cultural Galas & Travel'
  }
];

export const FABRICS_LIST: FabricInfo[] = [
  {
    id: 'lawn',
    name: 'Pure Cotton Lawn',
    origin: 'Faisalabad & Multan',
    description: 'Woven with high-twist 80s and 100s combed cotton yarns. Silky smooth, featherweight, and naturally breathable for warm subcontinent climates.',
    characteristics: ['Ultra-breathable', 'High color vibrancy', 'Soft fluid drape', 'Durable wash after wash'],
    bestFor: 'Daytime Pret, Summer Soirées, Everyday Luxury'
  },
  {
    id: 'silk',
    name: 'Pakistani Raw Silk & Mulberry',
    origin: 'Chiniot & Lahore',
    description: 'Hand-reeled wild raw silk displaying tactile slubs and an unmistakable soft luster. Provides exquisite structure for regal formals and kalidars.',
    characteristics: ['Rich natural luster', 'Sculptural drape', 'Hypoallergenic natural fiber', 'Subtle textured slub'],
    bestFor: 'Formal Peshwas, Wedding Guest Ensembles, Festive Wear'
  },
  {
    id: 'khaddi',
    name: 'Heritage Khaddi',
    origin: 'Peshawar & Thatta',
    description: 'Pure hand-spun, handloom-woven indigenous cotton and silk blend with a subtle rustic tactile grain that grows softer with every wear.',
    characteristics: ['100% Handloom spun', 'Zero carbon footprint', 'All-weather insulation', 'Distinctive artisanal grain'],
    bestFor: 'Heirloom Kurtas, Jamdani Dupattas, Artisanal Stoles'
  },
  {
    id: 'organza',
    name: 'Tissue & Glass Organza',
    origin: 'Lahore Textile Cluster',
    description: 'Ethereal sheer fabric with crisp architectural tension, woven with shimmering metallic yarn or fine silk to create celestial volumes and scalloped cutwork.',
    characteristics: ['Crisp silhouette support', 'Luminous transparency', 'Perfect for thread cutwork', 'Ethereal floating drape'],
    bestFor: 'Statement Sleeves, Sheer Dupattas, Occasion Overlays'
  }
];

export const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string; label: string }> = {
  PKR: { rate: 1, symbol: 'PKR', label: 'Pakistani Rupee' },
  USD: { rate: 0.0036, symbol: '$', label: 'US Dollar' },
  GBP: { rate: 0.0028, symbol: '£', label: 'British Pound' },
  AED: { rate: 0.0132, symbol: 'AED', label: 'UAE Dirham' }
};

export function formatPrice(amountInPKR: number, currency: Currency = 'PKR'): string {
  const { rate, symbol } = CURRENCY_RATES[currency];
  const converted = amountInPKR * rate;
  if (currency === 'PKR') {
    return `${symbol} ${amountInPKR.toLocaleString('en-US')}`;
  }
  return `${symbol} ${converted.toFixed(2)}`;
}
