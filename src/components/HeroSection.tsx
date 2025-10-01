import { Leaf, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: set URL hash so the browser scrolls when section mounts
      window.location.hash = 'products-section';
      setTimeout(() => {
        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <section className="hero-container bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Star className="h-4 w-4 text-primary fill-current" />
              <span className="text-sm font-medium text-primary">India's #1 Organic Tea Brand</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground">Pure Organic</span>
                <span className="block text-primary">Green Tea</span>
                <span className="block text-muted-foreground text-lg md:text-xl font-normal mt-2">
                  Sourced from pristine Himalayan gardens
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Experience the authentic taste of premium organic green tea, 
              carefully handpicked and processed to preserve natural antioxidants 
              and deliver exceptional wellness benefits.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold group" onClick={scrollToProducts}>
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base">
                Learn More
              </Button>
            </div>
            
            {/* Trust Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm border border-primary/30"></div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                  <Leaf className="h-16 w-16 text-white" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-sm">100%</span>
              </div>
              
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                <Star className="h-6 w-6 text-white fill-current" />
              </div>
              
              <div className="absolute top-1/2 left-4 w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              
              <div className="absolute top-1/2 right-4 w-12 h-12 bg-secondary/80 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-500">
                <Leaf className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};