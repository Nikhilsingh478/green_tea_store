import { useState } from "react";
import { Plus, Edit, Trash2, Package, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Mock product data
const initialProducts = [
  { id: 1, name: "Chamomile Green Tea", category: "Herbal & Floral", price: 199, stock: 45 },
  { id: 2, name: "Lemon Green Tea", category: "Citrus & Refreshing", price: 189, stock: 32 },
  { id: 3, name: "Tulsi Green Tea", category: "Spice & Ayurvedic", price: 215, stock: 28 },
  { id: 4, name: "Jasmine Green Tea", category: "Herbal & Floral", price: 199, stock: 52 },
  { id: 5, name: "Mint Green Tea", category: "Citrus & Refreshing", price: 189, stock: 38 }
];

// Mock order data
const mockOrders = [
  { id: "ORD001", customer: "Rajesh Kumar", total: 597, status: "Pending", date: "2024-01-20" },
  { id: "ORD002", customer: "Priya Sharma", total: 378, status: "Shipped", date: "2024-01-19" },
  { id: "ORD003", customer: "Amit Patel", total: 845, status: "Delivered", date: "2024-01-18" },
  { id: "ORD004", customer: "Sunita Verma", total: 299, status: "Pending", date: "2024-01-17" },
  { id: "ORD005", customer: "Vikram Singh", total: 456, status: "Shipped", date: "2024-01-16" }
];

const Admin = () => {
  const [products, setProducts] = useState(initialProducts);
  const [orders] = useState(mockOrders);
  const { toast } = useToast();

  // Form state for adding products
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    imageUrl: ""
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const product = {
      id: products.length + 1,
      name: newProduct.name,
      category: newProduct.category,
      price: parseInt(newProduct.price),
      stock: Math.floor(Math.random() * 50) + 10 // Random stock
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", category: "", description: "", price: "", imageUrl: "" });
    
    toast({
      title: "Product Added",
      description: `${product.name} has been added successfully.`
    });
  };

  const handleDeleteProduct = (productId: number, productName: string) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Product Deleted",
      description: `${productName} has been removed.`
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Delivered": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto container-padding py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-5xl font-bold text-foreground mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl premium-text text-muted-foreground">
            Manage your products and orders
          </p>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Orders
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-12">
            {/* Add Product Form */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Plus className="h-5 w-5" />
                  Add New Product
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter product name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Herbal & Floral">Herbal & Floral</SelectItem>
                        <SelectItem value="Citrus & Refreshing">Citrus & Refreshing</SelectItem>
                        <SelectItem value="Spice & Ayurvedic">Spice & Ayurvedic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price">Price (₹) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter price"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      placeholder="Enter image URL"
                      value={newProduct.imageUrl}
                      onChange={(e) => setNewProduct({...newProduct, imageUrl: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  />
                </div>
                <Button onClick={handleAddProduct} className="premium-button">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </CardContent>
            </Card>

            {/* Products List */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-2xl">Products ({products.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 premium-text font-semibold">Name</th>
                        <th className="text-left py-4 premium-text font-semibold">Category</th>
                        <th className="text-left py-4 premium-text font-semibold">Price</th>
                        <th className="text-left py-4 premium-text font-semibold">Stock</th>
                        <th className="text-left py-4 premium-text font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="py-4 premium-text font-medium">{product.name}</td>
                          <td className="py-4">
                            <Badge variant="outline">{product.category}</Badge>
                          </td>
                          <td className="py-4 premium-text font-semibold">₹{product.price}</td>
                          <td className="py-4 premium-text">{product.stock} units</td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDeleteProduct(product.id, product.name)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-2xl">Recent Orders ({orders.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 premium-text font-semibold">Order ID</th>
                        <th className="text-left py-4 premium-text font-semibold">Customer</th>
                        <th className="text-left py-4 premium-text font-semibold">Total</th>
                        <th className="text-left py-4 premium-text font-semibold">Status</th>
                        <th className="text-left py-4 premium-text font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="py-4 premium-text font-mono font-medium">{order.id}</td>
                          <td className="py-4 premium-text font-medium">{order.customer}</td>
                          <td className="py-4 premium-text font-semibold">₹{order.total}</td>
                          <td className="py-4">
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </td>
                          <td className="py-4 premium-text">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;