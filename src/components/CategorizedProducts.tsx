import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Product data for all 15 green tea products
const herbalTeas = [
  { id: 1, name: "Chamomile Green Tea", description: "Calming blend with mild chamomile aroma", price: 199 },
  { id: 2, name: "Lavender Green Tea", description: "Soothing lavender-infused green tea for relaxation", price: 199 },
  { id: 3, name: "Rose Green Tea", description: "Delicate rose petals in premium green base", price: 199 },
  { id: 4, name: "Jasmine Green Tea", description: "Fragrant jasmine blossoms meet smooth green tea", price: 199 },
  { id: 5, name: "Hibiscus Green Tea", description: "Tart-sweet blossom blend, rich in antioxidants", price: 199 },
  { id: 6, name: "Lavender Chamomile Green Tea", description: "Double soothing with lavender + chamomile", price: 229 },
  { id: 7, name: "Blue Pea Green Tea", description: "Visually stunning butterfly pea flower infusion", price: 249 }
];

const citrusTeas = [
  { id: 8, name: "Lemon Green Tea", description: "Classic zesty green tea with bright lemon flavor", price: 189 },
  { id: 9, name: "Lemongrass Green Tea", description: "Refreshing lemongrass for a cool, herbal taste", price: 189 },
  { id: 10, name: "Orange Green Tea", description: "Vibrant citrus twist on green tea goodness", price: 189 },
  { id: 11, name: "Mint Green Tea", description: "Crisp mint infusion for an energetic palate", price: 189 },
  { id: 12, name: "Tulsi Mint Green Tea", description: "Holy basil meets mint for balanced refreshment", price: 219 }
];

const spiceTeas = [
  { id: 13, name: "Tulsi Green Tea", description: "Adaptogenic tulsi for immune and stress support", price: 215 },
  { id: 14, name: "Ginger Green Tea", description: "Warming ginger roots blended into green tea", price: 199 },
  { id: 15, name: "Kashmiri Kahwa", description: "Traditional saffron & almond spice infusion from Kashmir", price: 299 }
];

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: typeof herbalTeas;
  bgGradient: string;
}

const ProductSection = ({ title, subtitle, products, bgGradient }: ProductSectionProps) => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();

  const addToCart = (productId: number, productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const toggleWishlist = (productId: number, productName: string) => {
    setWishlist(prev => {
      const isInWishlist = prev.includes(productId);
      if (isInWishlist) {
        toast({
          title: "Removed from Wishlist",
          description: `${productName} has been removed from your wishlist.`,
        });
        return prev.filter(id => id !== productId);
      } else {
        toast({
          title: "Added to Wishlist",
          description: `${productName} has been added to your wishlist.`,
        });
        return [...prev, productId];
      }
    });
  };

  return (
    <section className={`relative py-32 ${bgGradient}`}>
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-xl premium-text text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <Card key={product.id} className="product-card group h-full">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-square bg-gradient-to-br from-organic-cream to-organic-sage/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="text-primary font-medium premium-text">Tea Box</span>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-organic bg-background/90 backdrop-blur-sm shadow-elegant"
                  onClick={() => toggleWishlist(product.id, product.name)}
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      wishlist.includes(product.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-muted-foreground"
                    }`} 
                  />
                </Button>
              </div>

              <CardContent className="p-8">
                <h3 className="premium-heading text-2xl mb-4 hover:text-primary transition-organic">
                  {product.name}
                </h3>
                
                <p className="text-base premium-text text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-display font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <span className="text-sm premium-text text-muted-foreground">
                    Free shipping
                  </span>
                </div>

                <Button 
                  className="w-full premium-button bg-primary text-primary-foreground h-14 text-lg font-semibold tracking-wide transform hover:scale-[1.02] transition-all duration-300"
                  onClick={() => addToCart(product.id, product.name)}
                >
                  <ShoppingCart className="h-5 w-5 mr-3" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CategorizedProducts = () => {
  return (
    <>
      <ProductSection 
        title="Herbal & Floral Infusions"
        subtitle="Soothing, calming, aromatic blends"
        products={herbalTeas}
        bgGradient="bg-gradient-to-br from-background via-organic-cream/30 to-background"
      />
      
      <ProductSection 
        title="Citrus & Refreshing Blends"
        subtitle="Zesty, tangy, and revitalizing"
        products={citrusTeas}
        bgGradient="bg-gradient-to-br from-organic-sage/10 via-background to-organic-sage/10"
      />
      
      <ProductSection 
        title="Spice & Ayurvedic Wellness"
        subtitle="Warming, healing, immunity-boosting"
        products={spiceTeas}
        bgGradient="bg-gradient-to-br from-organic-terra/10 via-background to-organic-terra/10"
      />
    </>
  );
};