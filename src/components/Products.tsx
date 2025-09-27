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
import { Plus, Edit, Trash2, Search, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const productsData = [
  {
    id: 1,
    name: 'Green Tea Classic',
    price: 150,
    category: 'Green Tea',
    stock: 45,
    available: true,
    image: '/api/placeholder/200/200',
    description: 'Premium quality green tea with antioxidants and natural flavor.'
  },
  {
    id: 2,
    name: 'Earl Grey Premium',
    price: 200,
    category: 'Black Tea',
    stock: 32,
    available: true,
    image: '/api/placeholder/200/200',
    description: 'Classic Earl Grey tea with bergamot oil and cornflower petals.'
  },
  {
    id: 3,
    name: 'Jasmine Tea',
    price: 180,
    category: 'Green Tea',
    stock: 28,
    available: true,
    image: '/api/placeholder/200/200',
    description: 'Delicate green tea scented with fresh jasmine flowers.'
  },
  {
    id: 4,
    name: 'Oolong Premium',
    price: 250,
    category: 'Oolong Tea',
    stock: 15,
    available: true,
    image: '/api/placeholder/200/200',
    description: 'Traditional oolong tea with complex flavor profile.'
  },
  {
    id: 5,
    name: 'Chamomile Tea',
    price: 120,
    category: 'Herbal Tea',
    stock: 0,
    available: false,
    image: '/api/placeholder/200/200',
    description: 'Soothing chamomile flowers for relaxation and better sleep.'
  },
  {
    id: 6,
    name: 'Mint Tea',
    price: 100,
    category: 'Herbal Tea',
    stock: 55,
    available: true,
    image: '/api/placeholder/200/200',
    description: 'Refreshing mint leaves for a cooling tea experience.'
  }
];

const categories = ['Green Tea', 'Black Tea', 'Oolong Tea', 'Herbal Tea', 'White Tea'];

export function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
    available: true
  });

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: '',
      stock: '',
      description: '',
      available: true
    });
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      stock: product.stock.toString(),
      description: product.description,
      available: product.available
    });
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    // In a real app, this would save to backend
    console.log('Saving product:', formData);
    setIsModalOpen(false);
  };

  const handleDelete = (productId: number) => {
    // In a real app, this would delete from backend
    console.log('Deleting product:', productId);
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Add Button */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle>Products Management</CardTitle>
            <Button 
              onClick={handleAddProduct}
              className="bg-[#3CB371] hover:bg-[#2E8B57] text-white"
            >
              <Plus size={20} className="mr-2" />
              Add Product
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search products by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-4">
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg">{product.name}</h3>
                    <Badge variant={product.available ? 'default' : 'secondary'}>
                      {product.available ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-[#3CB371]">₹{product.price}</span>
                    <span className="text-sm text-gray-600">{product.category}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Package size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">Stock: {product.stock}</span>
                    </div>
                    <Badge variant={product.stock > 0 ? 'default' : 'destructive'}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Badge>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit size={16} />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Product Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter product name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter product description"
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="available">Product Available</Label>
              <Switch
                id="available"
                checked={formData.available}
                onCheckedChange={(checked) => setFormData({...formData, available: checked})}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit}
                className="flex-1 bg-[#3CB371] hover:bg-[#2E8B57] text-white"
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