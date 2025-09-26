import { Check, Users, Globe, Leaf, Award, Heart, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-center bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="space-y-10 animate-fade-in">
            {/* Premium trust badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 group">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-semibold text-primary tracking-wide">India's Most Trusted</span>
              </div>
              <div className="h-4 w-px bg-primary/30"></div>
              <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">Premium Organic</span>
            </div>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[0.95] tracking-tight">
                <span className="block text-primary hover:scale-105 transition-transform duration-700 origin-left">Authentically</span>
                <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x bg-300% font-black">
                  Organic,
                </span>
                <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mt-2 opacity-90">
                  not just in name.
                </span>
              </h1>
            </div>
            
            {/* Premium description */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light tracking-wide">
              Experience the pure essence of nature with our 
              <span className="text-primary font-semibold"> premium organic teas</span>, 
              sourced directly from the finest gardens and crafted with 
              <span className="text-secondary font-semibold"> ancient wisdom</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button 
                size="lg" 
                className="group premium-button h-16 px-10 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-2xl hover:shadow-primary/25 border-0 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Leaf className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Shop Premium Teas
                <div className="ml-3 h-2 w-2 bg-white/50 rounded-full group-hover:animate-ping"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-16 px-10 text-lg font-semibold border-2 border-primary/30 hover:border-primary/60 bg-background/50 backdrop-blur-sm hover:bg-primary/5 group transition-all duration-300"
              >
                <Heart className="h-5 w-5 mr-3 group-hover:text-red-500 transition-colors duration-300" />
                Learn Our Story
              </Button>
            </div>
            
            {/* Premium trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="group text-center hover:scale-105 transition-all duration-500">
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl group-hover:shadow-primary/25 transition-all duration-500 backdrop-blur-sm border border-primary/20">
                  <Check className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="font-display font-black text-3xl lg:text-4xl bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent">600+</div>
                <div className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">Quality Tests</div>
              </div>
              
              <div className="group text-center hover:scale-105 transition-all duration-500">
                <div className="relative w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl group-hover:shadow-secondary/25 transition-all duration-500 backdrop-blur-sm border border-secondary/20">
                  <Users className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="font-display font-black text-3xl lg:text-4xl bg-gradient-to-b from-secondary to-secondary/70 bg-clip-text text-transparent">2000+</div>
                <div className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">Partner Farmers</div>
              </div>
              
              <div className="group text-center hover:scale-105 transition-all duration-500">
                <div className="relative w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl group-hover:shadow-accent/25 transition-all duration-500 backdrop-blur-sm border border-accent/30">
                  <Globe className="h-8 w-8 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="font-display font-black text-3xl lg:text-4xl bg-gradient-to-b from-accent-foreground to-accent-foreground/70 bg-clip-text text-transparent">Global</div>
                <div className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right content - Premium 3D Visual */}
          <div className="relative lg:justify-self-end">
            {/* Main hero visual container */}
            <div className="relative w-full max-w-2xl h-[600px] lg:h-[700px]">
              
              {/* Central premium tea showcase */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main tea cup/leaf icon with premium styling */}
                  <div className="relative w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-full backdrop-blur-xl border-2 border-white/20 shadow-2xl flex items-center justify-center group hover:scale-105 transition-all duration-700">
                    
                    {/* Animated ring around main element */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping"></div>
                    <div className="absolute inset-4 rounded-full border border-secondary/30 animate-pulse delay-300"></div>
                    
                    {/* Central leaf icon */}
                    <div className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-500">
                      <Leaf className="h-16 w-16 lg:h-20 lg:w-20 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    {/* Premium quality indicator */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating tea product cards */}
              <div className="absolute top-12 left-12 w-24 h-32 lg:w-28 lg:h-36 bg-gradient-to-br from-primary/80 to-primary/60 rounded-2xl backdrop-blur-sm border border-white/30 shadow-xl animate-float hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center text-white">
                <div className="w-8 h-8 bg-white/30 rounded-full mb-2"></div>
                <div className="text-xs font-semibold text-center">Herbal<br/>Blend</div>
              </div>
              
              <div className="absolute top-32 right-8 w-24 h-32 lg:w-28 lg:h-36 bg-gradient-to-br from-secondary/80 to-secondary/60 rounded-2xl backdrop-blur-sm border border-white/30 shadow-xl animate-float delay-300 hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center text-white">
                <div className="w-8 h-8 bg-white/30 rounded-full mb-2"></div>
                <div className="text-xs font-semibold text-center">Citrus<br/>Fresh</div>
              </div>
              
              <div className="absolute bottom-20 left-8 w-24 h-32 lg:w-28 lg:h-36 bg-gradient-to-br from-accent/80 to-accent/60 rounded-2xl backdrop-blur-sm border border-white/30 shadow-xl animate-float delay-500 hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center text-primary">
                <div className="w-8 h-8 bg-primary/30 rounded-full mb-2"></div>
                <div className="text-xs font-semibold text-center">Spice<br/>Fusion</div>
              </div>
              
              <div className="absolute bottom-32 right-16 w-24 h-32 lg:w-28 lg:h-36 bg-gradient-to-br from-muted/80 to-muted/60 rounded-2xl backdrop-blur-sm border border-white/30 shadow-xl animate-float delay-700 hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center text-primary">
                <div className="w-8 h-8 bg-primary/30 rounded-full mb-2"></div>
                <div className="text-xs font-semibold text-center">Premium<br/>Blend</div>
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