import { useState, useEffect } from 'react';
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

export const useProducts = () => {
  const [products, setProducts] = useState<ProductWithStock[]>(() => {
    // Load from localStorage first
    const saved = localStorage.getItem('organic-tea-products');
    if (saved) {
      return JSON.parse(saved);
    }
    // Otherwise initialize with default products
    return convertToProductsWithStock(initialProducts);
  });

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('organic-tea-products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct: Omit<ProductWithStock, 'id'>) => {
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
    updateProduct(id, { stock, inStock: stock > 0 });
  };

  const getProductById = (id: number): ProductWithStock | undefined => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: 'herbal' | 'citrus' | 'spice' | 'all'): ProductWithStock[] => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    updateStock,
    getProductById,
    getProductsByCategory,
  };
};