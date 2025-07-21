import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategorizedProducts } from "@/components/CategorizedProducts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategorizedProducts />
      <Footer />
    </div>
  );
};

export default Index;
