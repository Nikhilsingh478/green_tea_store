import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Search, Eye, CheckCircle, Truck, Package, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ordersData = [
  {
    id: '#1001',
    customer: 'Rajesh Kumar',
    date: '2024-01-15',
    paymentType: 'COD',
    status: 'pending',
    total: '₹450',
    phone: '+91 9876543210',
    email: 'rajesh@email.com',
    address: '123 Green Street, Mumbai, Maharashtra 400001',
    products: [
      { name: 'Green Tea Classic', quantity: 2, price: '₹150' },
      { name: 'Earl Grey Premium', quantity: 1, price: '₹150' }
    ],
    prepaidAmount: '₹0',
    codAmount: '₹450'
  },
  {
    id: '#1002',
    customer: 'Priya Sharma',
    date: '2024-01-14',
    paymentType: 'Partial Prepayment',
    status: 'confirmed',
    total: '₹320',
    phone: '+91 9876543211',
    email: 'priya@email.com',
    address: '456 Tea Avenue, Delhi, Delhi 110001',
    products: [
      { name: 'Jasmine Tea', quantity: 1, price: '₹200' },
      { name: 'Chamomile Tea', quantity: 1, price: '₹120' }
    ],
    prepaidAmount: '₹160',
    codAmount: '₹160'
  },
  {
    id: '#1003',
    customer: 'Amit Patel',
    date: '2024-01-13',
    paymentType: 'COD',
    status: 'shipped',
    total: '₹650',
    phone: '+91 9876543212',
    email: 'amit@email.com',
    address: '789 Wellness Road, Bangalore, Karnataka 560001',
    products: [
      { name: 'Oolong Premium', quantity: 2, price: '₹200' },
      { name: 'Green Tea Classic', quantity: 3, price: '₹250' }
    ],
    prepaidAmount: '₹0',
    codAmount: '₹650'
  },
  {
    id: '#1004',
    customer: 'Sneha Gupta',
    date: '2024-01-12',
    paymentType: 'Partial Prepayment',
    status: 'delivered',
    total: '₹280',
    phone: '+91 9876543213',
    email: 'sneha@email.com',
    address: '321 Herbal Lane, Pune, Maharashtra 411001',
    products: [
      { name: 'Chamomile Tea', quantity: 2, price: '₹240' },
      { name: 'Mint Tea', quantity: 1, price: '₹40' }
    ],
    prepaidAmount: '₹140',
    codAmount: '₹140'
  },
  {
    id: '#1005',
    customer: 'Vikram Singh',
    date: '2024-01-11',
    paymentType: 'COD',
    status: 'cancelled',
    total: '₹380',
    phone: '+91 9876543214',
    email: 'vikram@email.com',
    address: '654 Garden Street, Jaipur, Rajasthan 302001',
    products: [
      { name: 'Earl Grey Premium', quantity: 2, price: '₹300' },
      { name: 'Green Tea Classic', quantity: 1, price: '₹80' }
    ],
    prepaidAmount: '₹0',
    codAmount: '₹380'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-[#FFC107] text-black';
    case 'confirmed': return 'bg-[#2196F3] text-white';
    case 'shipped': return 'bg-[#009688] text-white';
    case 'delivered': return 'bg-[#4CAF50] text-white';
    case 'cancelled': return 'bg-[#F44336] text-white';
    default: return 'bg-gray-500 text-white';
  }
};

const getNextAction = (status: string) => {
  switch (status) {
    case 'pending': return { action: 'confirm', label: 'Confirm Order', color: 'bg-primary text-primary-foreground', icon: CheckCircle };
    case 'confirmed': return { action: 'ship', label: 'Mark Shipped', color: 'bg-[#009688] text-white', icon: Truck };
    case 'shipped': return { action: 'deliver', label: 'Mark Delivered', color: 'bg-[#4CAF50] text-white', icon: Package };
    case 'delivered': return null;
    case 'cancelled': return null;
    default: return null;
  }
};

export function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredOrders = ordersData.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    // In a real app, this would update the backend
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <Card className="bg-card shadow-sm border border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Orders Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search orders by ID or customer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input-background border-border"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="bg-card shadow-sm border border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="text-foreground font-semibold">Order ID</TableHead>
                  <TableHead className="text-foreground font-semibold">Customer</TableHead>
                  <TableHead className="text-foreground font-semibold">Date</TableHead>
                  <TableHead className="text-foreground font-semibold">Payment Type</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold">Total</TableHead>
                  <TableHead className="text-foreground font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => {
                  const nextAction = getNextAction(order.status);
                  return (
                    <TableRow key={order.id} className="hover:bg-secondary transition-colors">
                      <TableCell className="text-primary font-medium">{order.id}</TableCell>
                      <TableCell className="text-foreground">{order.customer}</TableCell>
                      <TableCell className="text-muted-foreground">{order.date}</TableCell>
                      <TableCell className="text-muted-foreground">{order.paymentType}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewOrder(order)}
                          >
                            <Eye size={16} />
                          </Button>
                          {nextAction && (
                            <Button
                              size="sm"
                              className={`${nextAction.color} hover:opacity-90 text-white`}
                              onClick={() => handleStatusUpdate(order.id, nextAction.action)}
                            >
                              <nextAction.icon size={16} className="mr-1" />
                              {nextAction.label}
                            </Button>
                          )}
                          {order.status !== 'delivered' && order.status !== 'cancelled' && (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleStatusUpdate(order.id, 'cancelled')}
                            >
                              <X size={16} />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Order Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><span className="text-gray-600">Name:</span> {selectedOrder.customer}</p>
                    <p><span className="text-gray-600">Phone:</span> {selectedOrder.phone}</p>
                    <p><span className="text-gray-600">Email:</span> {selectedOrder.email}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Order Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><span className="text-gray-600">Date:</span> {selectedOrder.date}</p>
                    <p><span className="text-gray-600">Payment:</span> {selectedOrder.paymentType}</p>
                    <p><span className="text-gray-600">Status:</span> 
                      <Badge className={`ml-2 ${getStatusColor(selectedOrder.status)}`}>
                        {selectedOrder.status}
                      </Badge>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{selectedOrder.address}</p>
                </CardContent>
              </Card>

              {/* Products */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedOrder.products.map((product: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p>{product.name}</p>
                          <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                        </div>
                        <p>{product.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Prepaid Amount:</span>
                    <span>{selectedOrder.prepaidAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COD Amount:</span>
                    <span>{selectedOrder.codAmount}</span>
                  </div>
                  <div className="flex justify-between text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>{selectedOrder.total}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}