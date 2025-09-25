import { useState } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "Redirecting to payment page...",
    });
    // Here you would integrate with a payment processor
    setTimeout(() => {
      clearCart();
      onClose();
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
    }, 2000);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-96 bg-background border-l border-border">
        <SheetHeader className="pb-6 border-b border-border">
          <SheetTitle className="flex items-center gap-2 font-display text-xl">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            {cartItems.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Add some products to get started
              </p>
              <Button onClick={onClose} className="w-full">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 bg-card rounded-lg border">
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm mb-1 line-clamp-2">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      ₹{item.product.price} each
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">
                          ₹{item.product.price * item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border pt-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>₹{getTotalPrice()}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button onClick={handleCheckout} className="w-full h-12 premium-button">
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="w-full h-10 text-sm"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};