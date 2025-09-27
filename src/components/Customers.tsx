import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Search, Eye, Mail, Phone, MapPin } from 'lucide-react';

const customersData = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh@email.com',
    phone: '+91 9876543210',
    totalOrders: 8,
    lastOrderDate: '2024-01-15',
    totalSpent: '₹3,200',
    address: '123 Green Street, Mumbai, Maharashtra 400001',
    joinDate: '2023-06-15',
    status: 'active',
    orders: [
      { id: '#1001', date: '2024-01-15', amount: '₹450', status: 'delivered' },
      { id: '#0987', date: '2024-01-05', amount: '₹320', status: 'delivered' },
      { id: '#0945', date: '2023-12-28', amount: '₹280', status: 'delivered' },
      { id: '#0923', date: '2023-12-15', amount: '₹540', status: 'delivered' },
    ]
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@email.com',
    phone: '+91 9876543211',
    totalOrders: 12,
    lastOrderDate: '2024-01-14',
    totalSpent: '₹4,800',
    address: '456 Tea Avenue, Delhi, Delhi 110001',
    joinDate: '2023-04-20',
    status: 'active',
    orders: [
      { id: '#1002', date: '2024-01-14', amount: '₹320', status: 'confirmed' },
      { id: '#0988', date: '2024-01-08', amount: '₹450', status: 'delivered' },
      { id: '#0956', date: '2023-12-30', amount: '₹380', status: 'delivered' },
    ]
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit@email.com',
    phone: '+91 9876543212',
    totalOrders: 5,
    lastOrderDate: '2024-01-13',
    totalSpent: '₹2,100',
    address: '789 Wellness Road, Bangalore, Karnataka 560001',
    joinDate: '2023-08-10',
    status: 'active',
    orders: [
      { id: '#1003', date: '2024-01-13', amount: '₹650', status: 'shipped' },
      { id: '#0934', date: '2023-12-20', amount: '₹420', status: 'delivered' },
      { id: '#0901', date: '2023-11-15', amount: '₹350', status: 'delivered' },
    ]
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    email: 'sneha@email.com',
    phone: '+91 9876543213',
    totalOrders: 15,
    lastOrderDate: '2024-01-12',
    totalSpent: '₹6,500',
    address: '321 Herbal Lane, Pune, Maharashtra 411001',
    joinDate: '2023-03-05',
    status: 'active',
    orders: [
      { id: '#1004', date: '2024-01-12', amount: '₹280', status: 'delivered' },
      { id: '#0991', date: '2024-01-02', amount: '₹520', status: 'delivered' },
      { id: '#0967', date: '2023-12-25', amount: '₹340', status: 'delivered' },
    ]
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram@email.com',
    phone: '+91 9876543214',
    totalOrders: 3,
    lastOrderDate: '2023-12-05',
    totalSpent: '₹890',
    address: '654 Garden Street, Jaipur, Rajasthan 302001',
    joinDate: '2023-10-15',
    status: 'inactive',
    orders: [
      { id: '#0912', date: '2023-12-05', amount: '₹320', status: 'delivered' },
      { id: '#0878', date: '2023-11-20', amount: '₹280', status: 'delivered' },
      { id: '#0845', date: '2023-11-05', amount: '₹290', status: 'delivered' },
    ]
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

export function Customers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCustomers = customersData.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    return matchesSearch;
  });

  const handleViewCustomer = (customer: any) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header with Search */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Customers Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search customers by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card className="bg-white shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Total Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p>{customer.name}</p>
                        <p className="text-sm text-gray-500">Joined {customer.joinDate}</p>
                      </div>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.totalOrders}</TableCell>
                    <TableCell className="text-[#3CB371]">{customer.totalSpent}</TableCell>
                    <TableCell>{customer.lastOrderDate}</TableCell>
                    <TableCell>
                      <Badge variant={customer.status === 'active' ? 'default' : 'secondary'}>
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewCustomer(customer)}
                      >
                        <Eye size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Customer Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Customer Details - {selectedCustomer?.name}</DialogTitle>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6">
              {/* Customer Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail size={20} />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-400" />
                      <span>{selectedCustomer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-400" />
                      <span>{selectedCustomer.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-gray-400 mt-1" />
                      <span className="text-sm">{selectedCustomer.address}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Account Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member Since:</span>
                      <span>{selectedCustomer.joinDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Orders:</span>
                      <span className="text-[#3CB371]">{selectedCustomer.totalOrders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Spent:</span>
                      <span className="text-[#3CB371]">{selectedCustomer.totalSpent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <Badge variant={selectedCustomer.status === 'active' ? 'default' : 'secondary'}>
                        {selectedCustomer.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedCustomer.orders.map((order: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <span className="text-[#3CB371]">{order.id}</span>
                          <span className="text-sm text-gray-600">{order.date}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span>{order.amount}</span>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  <Mail size={16} className="mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone size={16} className="mr-2" />
                  Call Customer
                </Button>
                <Button className="flex-1 bg-[#3CB371] hover:bg-[#2E8B57] text-white">
                  View All Orders
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}