import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto container-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">OI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wide">ORGANIC</span>
                <span className="font-display font-bold text-xl text-secondary -mt-1 tracking-wide">INDIA</span>
              </div>
            </div>
            <p className="text-base premium-text opacity-90 leading-relaxed">
              Committed to providing authentic organic products that nurture wellness and support sustainable farming practices across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="premium-heading text-xl">Quick Links</h3>
            <ul className="space-y-3 text-base premium-text opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Green Tea Collection</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Wellness Teas</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Herbal Supplements</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Organic Certification</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Track Order</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-6">
            <h3 className="premium-heading text-xl">Customer Support</h3>
            <ul className="space-y-3 text-base premium-text opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping & Returns</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Size Guide</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="premium-heading text-xl">Stay Connected</h3>
            <p className="text-base premium-text opacity-90 leading-relaxed">
              Subscribe to our newsletter for the latest organic wellness tips and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="premium-input bg-primary-foreground text-primary placeholder:text-primary/60 h-12"
              />
              <Button variant="secondary" className="w-full premium-button h-12 font-semibold tracking-wide">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3 text-base premium-text opacity-90">
                <Phone className="h-5 w-5" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-base premium-text opacity-90">
                <Mail className="h-5 w-5" />
                <span>support@organicindia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-base premium-text opacity-90">
                <MapPin className="h-5 w-5" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-primary-foreground/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-base premium-text opacity-90">
            © 2024 Organic India. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-8">
            {/* Certification badges */}
            <div className="flex items-center space-x-6">
              <div className="bg-primary-foreground/10 px-4 py-2 rounded-lg text-sm font-medium tracking-wide">
                USDA Organic
              </div>
              <div className="bg-primary-foreground/10 px-4 py-2 rounded-lg text-sm font-medium tracking-wide">
                India Organic
              </div>
              <div className="bg-primary-foreground/10 px-4 py-2 rounded-lg text-sm font-medium tracking-wide">
                FSSAI Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};