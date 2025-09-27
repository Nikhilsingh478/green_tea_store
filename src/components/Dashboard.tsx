import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ShoppingCart, 
  DollarSign, 
  CreditCard, 
  TrendingUp,
  Package,
  Users
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const statsData = [
  {
    title: 'Total Orders',
    value: '143',
    change: '+12%',
    icon: ShoppingCart,
    color: 'text-primary'
  },
  {
    title: 'Revenue',
    value: '₹45,231',
    change: '+8%',
    icon: DollarSign,
    color: 'text-primary'
  },
  {
    title: 'Pending COD',
    value: '₹12,450',
    change: '+3%',
    icon: CreditCard,
    color: 'text-accent'
  },
  {
    title: 'Products',
    value: '48',
    change: '+2',
    icon: Package,
    color: 'text-blue-500'
  }
];

const ordersData = [
  { month: 'Jan', orders: 30 },
  { month: 'Feb', orders: 45 },
  { month: 'Mar', orders: 38 },
  { month: 'Apr', orders: 52 },
  { month: 'May', orders: 61 },
  { month: 'Jun', orders: 55 },
];

const paymentData = [
  { name: 'COD', value: 65, color: '#EBCB8C' },
  { name: 'Prepaid', value: 35, color: '#D0F0C0' }
];

const topProductsData = [
  { name: 'Green Tea Classic', sales: 45 },
  { name: 'Earl Grey', sales: 38 },
  { name: 'Jasmine Tea', sales: 32 },
  { name: 'Oolong Premium', sales: 28 },
  { name: 'Chamomile', sales: 22 }
];

const recentOrders = [
  { id: '#1001', customer: 'Rajesh Kumar', amount: '₹450', status: 'delivered', date: '2 hours ago' },
  { id: '#1002', customer: 'Priya Sharma', amount: '₹320', status: 'shipped', date: '4 hours ago' },
  { id: '#1003', customer: 'Amit Patel', amount: '₹650', status: 'confirmed', date: '6 hours ago' },
  { id: '#1004', customer: 'Sneha Gupta', amount: '₹280', status: 'pending', date: '8 hours ago' },
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

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-all duration-200 border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold mt-2 text-foreground">{stat.value}</p>
                    <p className={`text-sm mt-1 font-medium ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders Over Time */}
        <Card className="bg-card shadow-sm border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Orders Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#D0F0C0" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Payment Type Distribution */}
        <Card className="bg-card shadow-sm border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Payment Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {paymentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <Card className="bg-card shadow-sm border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProductsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#D0F0C0" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="bg-card shadow-sm border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border hover:shadow-sm transition-shadow">
                  <div>
                    <p className="text-sm text-foreground font-medium">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{order.amount}</p>
                    <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}