// Consolidated product data with images and detailed information
import chamomileImage from "@/assets/chamomile-green-tea.jpg";
import lavenderImage from "@/assets/lavender-green-tea.jpg"; 
import lemonImage from "@/assets/lemon-green-tea.jpg";
import roseImage from "@/assets/rose-green-tea.jpg";
import jasmineImage from "@/assets/jasmine-green-tea.jpg";
import mintImage from "@/assets/mint-green-tea.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: 'herbal' | 'citrus' | 'spice';
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  ingredients: string[];
  benefits: string[];
}

export const herbalTeas: Product[] = [
  {
    id: 1,
    name: "Chamomile Green Tea",
    description: "Calming blend with mild chamomile aroma",
    longDescription: "This exquisite chamomile green tea combines the soothing properties of chamomile flowers with premium organic green tea leaves. Perfect for evening relaxation, this blend offers a gentle floral aroma and a smooth, calming taste that helps you unwind after a long day.",
    price: 199,
    category: 'herbal',
    image: chamomileImage,
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ["Organic", "Caffeine-free evening blend", "Hand-picked ingredients"],
    ingredients: ["Organic Green Tea", "Chamomile Flowers", "Natural Flavoring"],
    benefits: ["Promotes relaxation", "Aids sleep", "Rich in antioxidants"]
  },
  {
    id: 2,
    name: "Lavender Green Tea",
    description: "Soothing lavender-infused green tea for relaxation",
    longDescription: "Our lavender green tea is a harmonious blend of premium Ceylon green tea with dried lavender buds from the French countryside. This aromatic tea provides a perfect balance of the grassy notes of green tea with the floral elegance of lavender.",
    price: 199,
    category: 'herbal',
    image: lavenderImage,
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ["French lavender", "Premium Ceylon tea", "Stress-relief blend"],
    ingredients: ["Ceylon Green Tea", "Dried Lavender Buds", "Natural Lavender Oil"],
    benefits: ["Reduces stress", "Improves mood", "Promotes better sleep"]
  },
  {
    id: 3,
    name: "Rose Green Tea",
    description: "Delicate rose petals in premium green base",
    longDescription: "Experience the luxury of rose petals carefully blended with high-quality green tea. This romantic blend offers a sophisticated floral taste with subtle sweetness, making it perfect for special occasions or daily indulgence.",
    price: 199,
    category: 'herbal',
    image: roseImage,
    rating: 4.9,
    reviews: 234,
    inStock: true,
    features: ["Damask rose petals", "Premium grade tea", "Luxury blend"],
    ingredients: ["Green Tea Leaves", "Rose Petals", "Natural Rose Essence"],
    benefits: ["Skin health", "Anti-aging properties", "Romantic aromatherapy"]
  },
  {
    id: 4,
    name: "Jasmine Green Tea",
    description: "Fragrant jasmine blossoms meet smooth green tea",
    longDescription: "Traditional jasmine green tea crafted using the ancient scenting process where fresh jasmine flowers are layered with green tea leaves overnight. This time-honored method creates an intensely fragrant and flavorful tea.",
    price: 199,
    category: 'herbal',
    image: jasmineImage,
    rating: 4.8,
    reviews: 178,
    inStock: true,
    features: ["Traditional scenting method", "Fresh jasmine flowers", "Premium grade"],
    ingredients: ["Green Tea", "Jasmine Flowers", "Natural Jasmine Oil"],
    benefits: ["Mood enhancement", "Antioxidant rich", "Aromatherapy benefits"]
  },
  {
    id: 5,
    name: "Hibiscus Green Tea",
    description: "Tart-sweet blossom blend, rich in antioxidants",
    longDescription: "A vibrant fusion of tart hibiscus flowers and smooth green tea creates this antioxidant-rich blend. The beautiful ruby color and tangy-sweet flavor profile make this tea as delightful to look at as it is to drink.",
    price: 199,
    category: 'herbal',
    image: roseImage, // Using rose image as placeholder
    rating: 4.6,
    reviews: 92,
    inStock: true,
    features: ["High in vitamin C", "Natural ruby color", "Tart-sweet flavor"],
    ingredients: ["Green Tea", "Hibiscus Flowers", "Natural Fruit Flavoring"],
    benefits: ["Immune support", "Heart health", "Natural detox"]
  },
  {
    id: 6,
    name: "Lavender Chamomile Green Tea",
    description: "Double soothing with lavender + chamomile",
    longDescription: "The ultimate relaxation blend combining the calming properties of both lavender and chamomile with premium green tea. This therapeutic blend is perfect for stress relief and promotes a sense of well-being.",
    price: 229,
    category: 'herbal',
    image: lavenderImage,
    rating: 4.9,
    reviews: 145,
    inStock: true,
    features: ["Double relaxation blend", "Therapeutic grade", "Evening perfect"],
    ingredients: ["Green Tea", "Lavender Buds", "Chamomile Flowers", "Natural Oils"],
    benefits: ["Deep relaxation", "Stress relief", "Better sleep quality"]
  },
  {
    id: 7,
    name: "Blue Pea Green Tea",
    description: "Visually stunning butterfly pea flower infusion",
    longDescription: "This magical tea changes color from blue to purple when lemon is added! Made with butterfly pea flowers and premium green tea, it's not only Instagram-worthy but also packed with antioxidants and natural compounds.",
    price: 249,
    category: 'herbal',
    image: jasmineImage, // Using jasmine as placeholder
    rating: 4.7,
    reviews: 203,
    inStock: true,
    features: ["Color-changing magic", "Instagram-worthy", "High antioxidants"],
    ingredients: ["Green Tea", "Butterfly Pea Flowers", "Natural Blue Coloring"],
    benefits: ["Eye health", "Brain function", "Anti-inflammatory"]
  }
];

export const citrusTeas: Product[] = [
  {
    id: 8,
    name: "Lemon Green Tea",
    description: "Classic zesty green tea with bright lemon flavor",
    longDescription: "Start your day with this energizing blend of premium green tea and natural lemon essence. The bright citrus notes perfectly complement the grassy undertones of green tea, creating a refreshing and invigorating experience.",
    price: 189,
    category: 'citrus',
    image: lemonImage,
    rating: 4.8,
    reviews: 267,
    inStock: true,
    features: ["Natural lemon essence", "Morning energizer", "Vitamin C boost"],
    ingredients: ["Green Tea", "Natural Lemon Flavoring", "Lemon Peel"],
    benefits: ["Energy boost", "Metabolism support", "Immune system"]
  },
  {
    id: 9,
    name: "Lemongrass Green Tea",
    description: "Refreshing lemongrass for a cool, herbal taste",
    longDescription: "Fresh lemongrass combined with quality green tea creates this refreshing and aromatic blend. Popular in Southeast Asian cuisine, lemongrass adds a citrusy, slightly sweet flavor that's both cooling and energizing.",
    price: 189,
    category: 'citrus',
    image: lemonImage,
    rating: 4.6,
    reviews: 134,
    inStock: true,
    features: ["Fresh lemongrass", "Southeast Asian inspired", "Cooling effect"],
    ingredients: ["Green Tea", "Dried Lemongrass", "Natural Citrus Oil"],
    benefits: ["Digestive aid", "Cooling effect", "Natural detox"]
  },
  {
    id: 10,
    name: "Orange Green Tea",
    description: "Vibrant citrus twist on green tea goodness",
    longDescription: "Bright and cheerful orange peel blended with smooth green tea creates this uplifting morning blend. The sweet citrus aroma and flavor make this tea a perfect pick-me-up any time of day.",
    price: 189,
    category: 'citrus',
    image: lemonImage, // Using lemon as placeholder
    rating: 4.7,
    reviews: 198,
    inStock: true,
    features: ["Sweet orange peel", "Morning blend", "Uplifting aroma"],
    ingredients: ["Green Tea", "Orange Peel", "Natural Orange Oil"],
    benefits: ["Mood enhancement", "Vitamin C", "Energy boost"]
  },
  {
    id: 11,
    name: "Mint Green Tea", 
    description: "Crisp mint infusion for an energetic palate",
    longDescription: "Cool and refreshing mint leaves perfectly complement the earthiness of green tea in this invigorating blend. The crisp mint provides a cooling sensation that makes this tea perfect for hot days or as a post-meal digestive.",
    price: 189,
    category: 'citrus',
    image: mintImage,
    rating: 4.8,
    reviews: 223,
    inStock: true,
    features: ["Fresh mint leaves", "Cooling sensation", "Digestive blend"],
    ingredients: ["Green Tea", "Peppermint Leaves", "Spearmint", "Natural Mint Oil"],
    benefits: ["Digestive support", "Cooling effect", "Fresh breath"]
  },
  {
    id: 12,
    name: "Tulsi Mint Green Tea",
    description: "Holy basil meets mint for balanced refreshment",
    longDescription: "This unique blend combines the adaptogenic properties of tulsi (holy basil) with refreshing mint and quality green tea. Tulsi is revered in Ayurveda for its stress-relieving and immunity-boosting properties.",
    price: 219,
    category: 'citrus',
    image: mintImage,
    rating: 4.9,
    reviews: 167,
    inStock: true,
    features: ["Adaptogenic tulsi", "Ayurvedic blend", "Stress relief"],
    ingredients: ["Green Tea", "Tulsi Leaves", "Mint", "Natural Herbs"],
    benefits: ["Stress relief", "Immune support", "Adaptogenic properties"]
  }
];

export const spiceTeas: Product[] = [
  {
    id: 13,
    name: "Tulsi Green Tea",
    description: "Adaptogenic tulsi for immune and stress support",
    longDescription: "Pure tulsi (holy basil) blended with premium green tea creates this powerful adaptogenic blend. Revered in Ayurvedic medicine for thousands of years, tulsi helps the body adapt to stress while providing numerous health benefits.",
    price: 215,
    category: 'spice',
    image: jasmineImage, // Using jasmine as placeholder
    rating: 4.8,
    reviews: 189,
    inStock: true,
    features: ["Pure tulsi", "Adaptogenic properties", "Ayurvedic medicine"],
    ingredients: ["Green Tea", "Organic Tulsi Leaves", "Natural Herbs"],
    benefits: ["Stress adaptation", "Immune support", "Mental clarity"]
  },
  {
    id: 14,
    name: "Ginger Green Tea",
    description: "Warming ginger roots blended into green tea",
    longDescription: "Spicy, warming ginger root combined with smooth green tea creates this invigorating and health-boosting blend. The natural heat of ginger perfectly complements the gentle bitterness of green tea, creating a balanced and energizing cup.",
    price: 199,
    category: 'spice',
    image: lemonImage, // Using lemon as placeholder for now
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ["Fresh ginger root", "Warming spice", "Digestive support"],
    ingredients: ["Green Tea", "Dried Ginger Root", "Natural Ginger Oil"],
    benefits: ["Digestive health", "Anti-inflammatory", "Circulation boost"]
  },
  {
    id: 15,
    name: "Kashmiri Kahwa",
    description: "Traditional saffron & almond spice infusion from Kashmir",
    longDescription: "This royal blend from the valleys of Kashmir combines premium green tea with saffron, cardamom, cinnamon, and almonds. A traditional recipe passed down through generations, this luxurious tea is perfect for special occasions.",
    price: 299,
    originalPrice: 349,
    category: 'spice',
    image: chamomileImage, // Using chamomile as placeholder
    rating: 4.9,
    reviews: 278,
    inStock: true,
    features: ["Kashmiri saffron", "Royal blend", "Traditional recipe"],
    ingredients: ["Green Tea", "Saffron", "Cardamom", "Cinnamon", "Almonds"],
    benefits: ["Luxury experience", "Warming spices", "Traditional wellness"]
  }
];

export const allProducts: Product[] = [...herbalTeas, ...citrusTeas, ...spiceTeas];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'herbal' | 'citrus' | 'spice' | 'all'): Product[] => {
  if (category === 'all') return allProducts;
  return allProducts.filter(product => product.category === category);
};