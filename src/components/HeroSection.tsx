import { Check, Users, Globe, Leaf, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient min-h-[95vh] flex items-center">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-gentle-fade">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Award className="h-4 w-4" />
              India's Most Trusted Organic Tea Brand
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl premium-heading text-primary leading-tight">
              Authentically Organic,{" "}
              <span className="text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                not just in name.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Experience the pure essence of nature with our premium organic teas, 
              sourced directly from the finest gardens and crafted with ancient wisdom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="premium-button h-14 px-8 text-base font-semibold">
                <Leaf className="h-5 w-5 mr-2" />
                Shop Premium Teas
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold">
                Learn Our Story
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div className="font-display font-bold text-2xl text-primary">600+</div>
                <div className="text-sm premium-text text-muted-foreground">Quality Tests</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="font-display font-bold text-2xl text-secondary">2000+</div>
                <div className="text-sm premium-text text-muted-foreground">Partner Farmers</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="font-display font-bold text-2xl text-accent-foreground">Global</div>
                <div className="text-sm premium-text text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced hero visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-3xl overflow-hidden shadow-2xl">
              {/* Main visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-40 h-40 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <Leaf className="h-20 w-20 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="w-20 h-24 bg-gradient-to-br from-primary/60 to-secondary/40 rounded-xl backdrop-blur-sm border border-white/20"></div>
                      <div className="w-20 h-24 bg-gradient-to-br from-secondary/60 to-accent/40 rounded-xl backdrop-blur-sm border border-white/20"></div>
                      <div className="w-20 h-24 bg-gradient-to-br from-accent/60 to-primary/40 rounded-xl backdrop-blur-sm border border-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center animate-gentle-float">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center animate-gentle-float-delayed">
                <Award className="h-8 w-8 text-secondary" />
              </div>
            </div>
            
            {/* Organic badges */}
            <div className="absolute -top-4 -right-4 space-y-3">
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-organic text-sm font-semibold border border-border">
                🏆 USDA Organic
              </div>
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-organic text-sm font-semibold border border-border">
                🇮🇳 India Organic
              </div>
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-organic text-sm font-semibold border border-border">
                ✓ FSSAI Certified
              </div>
            </div>
            
            {/* Customer reviews floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-organic border border-border">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="text-sm font-semibold">4.9/5</span>
              </div>
              <p className="text-xs text-muted-foreground">50,000+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M30 30c6.627 0 12-5.373 12-12S36.627 6 30 6s-12 5.373-12 12 5.373 12 12 12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};