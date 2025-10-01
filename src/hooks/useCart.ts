import { Product } from '@/data/products';
import { useCartContext } from '@/context/CartContext';

export interface CartItem {
  product: Product;
  quantity: number;
}

export const useCart = () => {
  // Delegate all cart state to the global CartContext
  return useCartContext();
};