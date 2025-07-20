import { Check, Users, Globe } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-gentle-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl premium-heading text-primary">
              Authentically Organic,{" "}
              <span className="text-secondary">not just in name.</span>
            </h1>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center space-x-4 premium-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-primary">600+</div>
                  <div className="text-sm premium-text text-muted-foreground">tests on herbs</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 premium-card">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-secondary">Direct</div>
                  <div className="text-sm premium-text text-muted-foreground">sourcing from 2000+ farmers</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 premium-card">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-accent-foreground">Global</div>
                  <div className="text-sm premium-text text-muted-foreground">organic certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Simulated person with organic products */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary rounded-full"></div>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-16 h-20 bg-secondary/60 rounded-lg"></div>
                  <div className="w-16 h-20 bg-accent/60 rounded-lg"></div>
                  <div className="w-16 h-20 bg-primary/60 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Organic badges */}
            <div className="absolute top-4 right-4 space-y-2">
              <div className="bg-card px-3 py-2 rounded-full shadow-card text-xs font-medium border">
                USDA Organic
              </div>
              <div className="bg-card px-3 py-2 rounded-full shadow-card text-xs font-medium border">
                India Organic
              </div>
              <div className="bg-card px-3 py-2 rounded-full shadow-card text-xs font-medium border">
                Fssai
              </div>
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