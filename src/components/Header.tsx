import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { allProducts } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { CartSidebar } from "@/components/CartSidebar";

const categories = [
  {
    name: "Tea Categories",
    items: [
      { label: "All Products", value: "all" },
      { label: "Herbal Teas", value: "herbal" },
      { label: "Citrus Teas", value: "citrus" },
      { label: "Spice Teas", value: "spice" }
    ]
  },
  {
    name: "Popular Blends",
    items: [
      { label: "Chamomile Green Tea", value: "chamomile" },
      { label: "Lemon Green Tea", value: "lemon" },
      { label: "Mint Green Tea", value: "mint" },
      { label: "Jasmine Green Tea", value: "jasmine" }
    ]
  },
  {
    name: "Wellness Focus",
    items: [
      { label: "Stress Relief", value: "stress" },
      { label: "Digestive Support", value: "digestive" },
      { label: "Immunity Boost", value: "immunity" },
      { label: "Energy Blend", value: "energy" }
    ]
  }
];

interface HeaderProps {
  onSearch?: (query: string) => void;
  onCategoryFilter?: (category: string) => void;
}

export const Header = ({ onSearch, onCategoryFilter }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistCount] = useState(0);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const handleCategoryClick = (category: string) => {
    if (onCategoryFilter) {
      onCategoryFilter(category);
    }
  };

  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground text-center py-3 px-6 text-sm font-medium tracking-wide">
        15% Off + Free Gift Worth ₹499 on Orders Above ₹1499
      </div>

      {/* Main header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-primary tracking-wide">ORGANIC</span>
                <span className="font-display font-bold text-xl text-secondary -mt-1 tracking-wide">INDIA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hover:text-primary font-medium tracking-wide">
                    Shop by Category
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 lg:w-80 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <div key={category.name}>
                        <DropdownMenuLabel className="text-primary font-semibold">
                          {category.name}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          {category.items.map((item) => (
                            <DropdownMenuItem 
                              key={item.value} 
                              className="cursor-pointer hover:bg-muted"
                              onClick={() => handleCategoryClick(item.value)}
                            >
                              {item.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" className="hover:text-primary font-medium tracking-wide">
                Deal of the Day
              </Button>
              <Button variant="ghost" className="hover:text-primary font-medium tracking-wide" onClick={() => navigate('/blogs')}>
                Blogs
              </Button>
              <Button variant="ghost" className="hover:text-primary font-medium tracking-wide">
                Value Deals
              </Button>
              <Button variant="ghost" className="hover:text-primary font-medium tracking-wide">
                Track Your Order
              </Button>
            </nav>

            {/* Search, Account, and Cart */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex items-center space-x-2">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-48 lg:w-64 xl:w-72 premium-input"
                  />
                </form>
              </div>

              {/* Account */}
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <User className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="hover:text-primary relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-secondary">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-secondary text-secondary-foreground font-semibold">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden py-4 border-t border-border px-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full premium-input"
              />
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start hover:text-primary">
                Shop by Category
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:text-primary">
                Deal of the Day
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:text-primary" onClick={() => navigate('/blogs')}>
                Blogs
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:text-primary">
                Value Deals
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:text-primary">
                Track Your Order
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};