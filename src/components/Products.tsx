import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Plus, Edit, Trash2, Search, Package, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useProducts, ProductWithStock } from '@/context/ProductContext';
import { ProductFormSchema } from '@/schemas/productSchema';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  { value: 'herbal', label: 'Herbal Tea' },
  { value: 'citrus', label: 'Citrus Tea' },
  { value: 'spice', label: 'Spice Tea' }
];

export function Products() {
  const { products, addProduct, updateProduct, deleteProduct, updateStock } = useProducts();
  const { toast } = useToast();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductWithStock | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    longDescription: '',
    price: '',
    originalPrice: '',
    category: 'herbal' as 'herbal' | 'citrus' | 'spice',
    stock: '',
    rating: '4.5',
    reviews: '0',
    features: '',
    ingredients: '',
    benefits: '',
    inStock: true
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      longDescription: '',
      price: '',
      originalPrice: '',
      category: 'herbal',
      stock: '',
      rating: '4.5',
      reviews: '0',
      features: '',
      ingredients: '',
      benefits: '',
      inStock: true
    });
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: ProductWithStock) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      longDescription: product.longDescription,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      category: product.category,
      stock: product.stock.toString(),
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      features: product.features.join(', '),
      ingredients: product.ingredients.join(', '),
      benefits: product.benefits.join(', '),
      inStock: product.inStock
    });
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product: ProductWithStock) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      deleteProduct(product.id);
      toast({
        title: "Product Deleted",
        description: `${product.name} has been removed from your inventory.`,
      });
    }
  };

  const handleSubmit = () => {
    try {
      const validatedData = ProductFormSchema.parse({
        name: formData.name,
        description: formData.description,
        longDescription: formData.longDescription,
        price: parseFloat(formData.price) || 0,
        originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : undefined,
        category: formData.category,
        stock: parseInt(formData.stock) || 0,
        rating: parseFloat(formData.rating) || 4.5,
        reviews: parseInt(formData.reviews) || 0,
        inStock: formData.inStock,
        features: formData.features,
        ingredients: formData.ingredients,
        benefits: formData.benefits
      });

      const productData = {
        ...validatedData,
        image: editingProduct?.image || '/api/placeholder/400/400',
        features: validatedData.features.split(',').map(f => f.trim()).filter(f => f),
        ingredients: validatedData.ingredients.split(',').map(i => i.trim()).filter(i => i),
        benefits: validatedData.benefits.split(',').map(b => b.trim()).filter(b => b)
      };
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Invalid Data",
          description: error.message,
          variant: "destructive"
        });
      }
      return;
    }

    const productData = {
      name: formData.name,
      description: formData.description,
      longDescription: formData.longDescription,
      price: Math.max(0, parseFloat(formData.price) || 0),
      originalPrice: formData.originalPrice ? Math.max(0, parseFloat(formData.originalPrice)) : undefined,
      category: formData.category,
      image: editingProduct?.image || '/api/placeholder/400/400',
      rating: Math.min(5, Math.max(1, parseFloat(formData.rating) || 4.5)),
      reviews: Math.max(0, parseInt(formData.reviews) || 0),
      stock: Math.max(0, parseInt(formData.stock) || 0),
      inStock: formData.inStock,
      features: formData.features.split(',').map(f => f.trim()).filter(f => f),
      ingredients: formData.ingredients.split(',').map(i => i.trim()).filter(i => i),
      benefits: formData.benefits.split(',').map(b => b.trim()).filter(b => b)
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      toast({
        title: "Product Updated",
        description: `${productData.name} has been successfully updated.`,
      });
    } else {
      addProduct(productData);
      toast({
        title: "Product Added",
        description: `${productData.name} has been added to your inventory.`,
      });
    }

    setIsModalOpen(false);
  };

  const handleStockUpdate = (product: ProductWithStock, newStock: number) => {
    updateStock(product.id, newStock);
    toast({
      title: "Stock Updated",
      description: `${product.name} stock updated to ${newStock} units.`,
    });
  };

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : category;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'herbal': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'citrus': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'spice': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 data-testid="heading-products" className="text-2xl font-bold text-foreground">Product Management</h1>
          <p data-testid="text-products-subtitle" className="text-muted-foreground">Manage your tea inventory and product details</p>
        </div>
        <Button data-testid="button-add-product" onClick={handleAddProduct} className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            data-testid="input-search-products"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger data-testid="select-category-filter" className="w-full sm:w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} data-testid={`card-product-${product.id}`} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="aspect-square w-full mb-4 rounded-lg overflow-hidden bg-muted">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start gap-2">
                <CardTitle data-testid={`text-product-name-${product.id}`} className="text-lg leading-tight">
                  {product.name}
                </CardTitle>
                <Badge className={getCategoryColor(product.category)}>
                  {getCategoryLabel(product.category)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p data-testid={`text-product-description-${product.id}`} className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <span data-testid={`text-product-price-${product.id}`} className="text-lg font-semibold text-primary">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">★ {product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span data-testid={`text-product-stock-${product.id}`} className="text-sm">
                    {product.stock} units
                  </span>
                  {product.stock < 10 && (
                    <Badge variant="destructive" className="text-xs">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Low Stock
                    </Badge>
                  )}
                </div>
                <Badge variant={product.inStock ? "default" : "secondary"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Input
                  data-testid={`input-stock-${product.id}`}
                  type="number"
                  min="0"
                  value={product.stock}
                  onChange={(e) => handleStockUpdate(product, parseInt(e.target.value) || 0)}
                  className="w-20 h-8 text-sm"
                />
                <span className="text-sm text-muted-foreground">stock</span>
              </div>

              <div className="flex gap-2">
                <Button
                  data-testid={`button-edit-${product.id}`}
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditProduct(product)}
                  className="flex-1"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  data-testid={`button-delete-${product.id}`}
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteProduct(product)}
                  className="flex-1"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm || categoryFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Start by adding your first product to the inventory.'
            }
          </p>
          {!searchTerm && categoryFilter === 'all' && (
            <Button onClick={handleAddProduct}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Product
            </Button>
          )}
        </div>
      )}

      {/* Add/Edit Product Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent data-testid="dialog-product-form" className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  data-testid="input-product-name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value: 'herbal' | 'citrus' | 'spice') => 
                  setFormData({ ...formData, category: value })
                }>
                  <SelectTrigger data-testid="select-product-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price">Price (₹) *</Label>
                <Input
                  data-testid="input-product-price"
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="originalPrice">Original Price (₹)</Label>
                <Input
                  data-testid="input-product-original-price"
                  id="originalPrice"
                  type="number"
                  step="0.01"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="stock">Stock Quantity *</Label>
                <Input
                  data-testid="input-product-stock"
                  id="stock"
                  type="number"
                  min="0"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Short Description *</Label>
              <Textarea
                data-testid="textarea-product-description"
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief product description"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="longDescription">Detailed Description</Label>
              <Textarea
                data-testid="textarea-product-long-description"
                id="longDescription"
                value={formData.longDescription}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                placeholder="Detailed product information"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="features">Features (comma-separated)</Label>
              <Input
                data-testid="input-product-features"
                id="features"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="Organic, Premium quality, Hand-picked"
              />
            </div>

            <div>
              <Label htmlFor="ingredients">Ingredients (comma-separated)</Label>
              <Input
                data-testid="input-product-ingredients"
                id="ingredients"
                value={formData.ingredients}
                onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                placeholder="Green tea, Chamomile flowers, Natural flavoring"
              />
            </div>

            <div>
              <Label htmlFor="benefits">Benefits (comma-separated)</Label>
              <Input
                data-testid="input-product-benefits"
                id="benefits"
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                placeholder="Promotes relaxation, Rich in antioxidants, Aids digestion"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rating">Rating (1-5)</Label>
                <Input
                  data-testid="input-product-rating"
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="reviews">Number of Reviews</Label>
                <Input
                  data-testid="input-product-reviews"
                  id="reviews"
                  type="number"
                  min="0"
                  value={formData.reviews}
                  onChange={(e) => setFormData({ ...formData, reviews: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                data-testid="switch-product-in-stock"
                id="inStock"
                checked={formData.inStock}
                onCheckedChange={(checked) => setFormData({ ...formData, inStock: checked })}
              />
              <Label htmlFor="inStock">Product is in stock</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                data-testid="button-cancel-product"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                data-testid="button-submit-product"
                onClick={handleSubmit}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {editingProduct ? 'Update' : 'Add'} Product
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}