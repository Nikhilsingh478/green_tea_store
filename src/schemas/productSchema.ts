import { z } from 'zod';

export const ProductFormSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  longDescription: z.string(),
  price: z.number().min(0, 'Price must be positive'),
  originalPrice: z.number().min(0, 'Original price must be positive').optional().or(z.literal('')),
  category: z.enum(['herbal', 'citrus', 'spice']),
  stock: z.number().int().min(0, 'Stock must be a non-negative integer'),
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
  reviews: z.number().int().min(0, 'Reviews must be non-negative'),
  features: z.string(),
  ingredients: z.string(),
  benefits: z.string(),
  inStock: z.boolean()
});

export type ProductFormData = z.infer<typeof ProductFormSchema>;