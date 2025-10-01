import { useState } from "react";
import { Heart, ShoppingCart, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/context/ProductContext";

const categories = ["All", "Herbal", "Citrus", "Spice"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "best-selling", label: "Best Selling" },
  { value: "a-z", label: "Alphabetically, A-Z" },
  { value: "z-a", label: "Alphabetically, Z-A" },
  { value: "price-low", label: "Price, low to high" },
  { value: "price-high", label: "Price, high to low" },
  { value: "date-new", label: "Date, new to old" },
  { value: "date-old", label: "Date, old to new" }
];

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { toast } = useToast();
  const { addToCart: addToCartHook } = useCart();
  const { products, getProductsByCategory } = useProducts();

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : getProductsByCategory(selectedCategory.toLowerCase() as 'herbal' | 'citrus' | 'spice');

  const addToCart = (product: typeof products[0]) => {
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
    <section className="container mx-auto container-padding section-padding">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm premium-text text-muted-foreground mb-12">
        <span>Home</span>
        <span>/</span>
        <span className="text-foreground font-medium">Green Tea</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar - Categories */}
        <div className="lg:w-72 space-y-8">
          <div className="premium-card">
            <h3 className="premium-heading text-xl mb-6 text-primary">Categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-organic font-medium tracking-wide ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Filter section - hidden on mobile */}
          <div className="hidden lg:block premium-card">
            <h3 className="premium-heading text-xl mb-6 text-primary">Teas & Infusions</h3>
            <div className="space-y-3 text-sm premium-text">
              <div className="cursor-pointer hover:text-primary transition-colors">Green Tea</div>
              <div className="cursor-pointer hover:text-primary transition-colors">Wellness Tea</div>
              <div className="cursor-pointer hover:text-primary transition-colors">Infusion</div>
            </div>
            
            <h3 className="premium-heading text-xl mb-6 mt-8 text-primary">Herbal Supplement</h3>
            <div className="space-y-3 text-sm premium-text">
              <div className="cursor-pointer hover:text-primary transition-colors">Condition Specific</div>
              <div className="cursor-pointer hover:text-primary transition-colors">Daily Nutrition</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-12">
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-primary text-primary-foreground" : ""}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-primary text-primary-foreground" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="sm:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm premium-text text-muted-foreground font-medium">Sort by</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
                <Card key={product.id} className={`product-card group ${viewMode === "list" ? "flex" : ""}`}>
                <div className={`relative overflow-hidden rounded-2xl ${viewMode === "list" ? "w-48" : ""}`}>
                  <div className="aspect-square bg-organic-cream flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-xl flex items-center justify-center">
                      <span className="text-primary font-medium premium-text">Tea Box</span>
                    </div>
                  </div>
                  
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-secondary">
                      Sale
                    </Badge>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-organic bg-background/80"
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

                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <h3 className="premium-heading text-xl mb-4 line-clamp-2 hover:text-primary transition-organic">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-display font-bold text-primary">
                      ₹ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p className="text-base premium-text text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <Button 
                    className="w-full premium-button bg-primary text-primary-foreground h-12 text-base font-semibold tracking-wide"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};