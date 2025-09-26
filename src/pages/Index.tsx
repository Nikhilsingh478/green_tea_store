import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategorizedProducts } from "@/components/CategorizedProducts";
import { SearchResults } from "@/components/SearchResults";
import { Footer } from "@/components/Footer";
import { allProducts, getProductsByCategory } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
      setSearchQuery(query);
      setIsSearching(true);
    }
  };

  const handleCategoryFilter = (category: string) => {
    if (category === 'all') {
      setFilteredProducts(allProducts);
      setSearchQuery("All Products");
    } else if (['herbal', 'citrus', 'spice'].includes(category)) {
      const results = getProductsByCategory(category as 'herbal' | 'citrus' | 'spice');
      setFilteredProducts(results);
      setSearchQuery(`${category.charAt(0).toUpperCase() + category.slice(1)} Teas`);
    } else {
      // Handle specific product searches or wellness categories
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(category.toLowerCase()) ||
        product.description.toLowerCase().includes(category.toLowerCase()) ||
        product.benefits.some(benefit => benefit.toLowerCase().includes(category.toLowerCase()))
      );
      setFilteredProducts(results);
      setSearchQuery(`Products: ${category}`);
    }
    setIsSearching(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts(allProducts);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} onCategoryFilter={handleCategoryFilter} />
      
      {isSearching ? (
        <SearchResults
          searchQuery={searchQuery}
          results={filteredProducts}
          onClose={clearSearch}
        />
      ) : (
        <>
          <HeroSection />
          <CategorizedProducts />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
