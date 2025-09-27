import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { allProducts as initialProducts, Product } from '@/data/products';

// Extended product interface with stock management
export interface ProductWithStock extends Product {
  stock: number;
}

// Convert existing products to include stock field
const convertToProductsWithStock = (products: Product[]): ProductWithStock[] => {
  return products.map(product => ({
    ...product,
    stock: Math.floor(Math.random() * 50) + 10 // Random stock between 10-60
  }));
};

interface ProductContextType {
  products: ProductWithStock[];
  addProduct: (newProduct: Omit<ProductWithStock, 'id'>) => ProductWithStock;
  updateProduct: (id: number, updates: Partial<ProductWithStock>) => void;
  deleteProduct: (id: number) => void;
  updateStock: (id: number, stock: number) => void;
  getProductById: (id: number) => ProductWithStock | undefined;
  getProductsByCategory: (category: 'herbal' | 'citrus' | 'spice' | 'all') => ProductWithStock[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductWithStock[]>(() => {
    // Load from localStorage first
    const saved = localStorage.getItem('organic-tea-products');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return convertToProductsWithStock(initialProducts);
      }
    }
    // Otherwise initialize with default products
    return convertToProductsWithStock(initialProducts);
  });

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('organic-tea-products', JSON.stringify(products));
  }, [products]);

  // Cross-tab synchronization
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'organic-tea-products' && e.newValue) {
        try {
          setProducts(JSON.parse(e.newValue));
        } catch {
          // Ignore invalid JSON
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addProduct = (newProduct: Omit<ProductWithStock, 'id'>): ProductWithStock => {
    const id = Math.max(...products.map(p => p.id), 0) + 1;
    const product: ProductWithStock = {
      ...newProduct,
      id,
    };
    setProducts(prev => [...prev, product]);
    return product;
  };

  const updateProduct = (id: number, updates: Partial<ProductWithStock>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id 
          ? { ...product, ...updates }
          : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const updateStock = (id: number, stock: number) => {
    const validStock = Math.max(0, isNaN(stock) ? 0 : stock);
    updateProduct(id, { stock: validStock, inStock: validStock > 0 });
  };

  const getProductById = (id: number): ProductWithStock | undefined => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: 'herbal' | 'citrus' | 'spice' | 'all'): ProductWithStock[] => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      updateStock,
      getProductById,
      getProductsByCategory,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};