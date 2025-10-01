import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { type Product } from "@/data/products";
import { useProducts } from "@/context/ProductContext";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  bgGradient: string;
}

const ProductSection = ({ title, subtitle, products, bgGradient }: ProductSectionProps) => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();
  const { addToCart: addToCartHook } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    addToCartHook(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
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
    <section className={`relative py-16 lg:py-24 ${bgGradient}`}>
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-base lg:text-xl premium-text text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="product-card group cursor-pointer transform hover:scale-[1.02] transition-all duration-300 hover:shadow-organic bg-card/80 backdrop-blur-sm"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-organic-cream to-organic-sage/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    Save ₹{product.originalPrice - product.price}
                  </Badge>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/90 backdrop-blur-sm hover:bg-background hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id, product.name);
                  }}
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

              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                </div>

                <h3 className="premium-heading text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-sm premium-text text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-display font-bold text-primary">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Free shipping
                  </Badge>
                </div>

                <Button 
                  className="w-full premium-button bg-primary text-primary-foreground h-12 text-sm font-semibold tracking-wide"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
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
  const { getProductsByCategory } = useProducts();
  
  const herbalProducts = getProductsByCategory('herbal');
  const citrusProducts = getProductsByCategory('citrus');
  const spiceProducts = getProductsByCategory('spice');
  
  return (
    <div id="products-section">
      <ProductSection
        title="Herbal & Floral Infusions"
        subtitle="Soothing, calming, aromatic blends"
        products={herbalProducts}
        bgGradient="bg-gradient-to-br from-background via-organic-cream/30 to-background"
      />
      
      <ProductSection 
        title="Citrus & Refreshing Blends"
        subtitle="Zesty, tangy, and revitalizing"
        products={citrusProducts}
        bgGradient="bg-gradient-to-br from-organic-sage/10 via-background to-organic-sage/10"
      />
      
      <ProductSection 
        title="Spice & Ayurvedic Wellness"
        subtitle="Warming, healing, immunity-boosting"
        products={spiceProducts}
        bgGradient="bg-gradient-to-br from-organic-terra/10 via-background to-organic-terra/10"
      />
    </div>
  );
};