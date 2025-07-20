import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">OI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">ORGANIC</span>
                <span className="font-bold text-lg text-secondary -mt-1">INDIA</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Committed to providing authentic organic products that nurture wellness and support sustainable farming practices across India.
            </p>
            <div className="flex space-x-3">
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
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Green Tea Collection</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Wellness Teas</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Herbal Supplements</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Organic Certification</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Track Order</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Support</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping & Returns</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Size Guide</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <p className="text-sm opacity-80">
              Subscribe to our newsletter for the latest organic wellness tips and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground text-primary placeholder:text-primary/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <span>support@organicindia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-80">
            © 2024 Organic India. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Certification badges */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary-foreground/10 px-3 py-1 rounded text-xs font-medium">
                USDA Organic
              </div>
              <div className="bg-primary-foreground/10 px-3 py-1 rounded text-xs font-medium">
                India Organic
              </div>
              <div className="bg-primary-foreground/10 px-3 py-1 rounded text-xs font-medium">
                FSSAI Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};