import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  CreditCard, 
  Users,
  Download,
  Calendar
} from 'lucide-react';

const monthlyRevenueData = [
  { month: 'Jan', revenue: 45000, orders: 143, avgOrder: 315 },
  { month: 'Feb', revenue: 52000, orders: 165, avgOrder: 320 },
  { month: 'Mar', revenue: 48000, orders: 150, avgOrder: 325 },
  { month: 'Apr', revenue: 61000, orders: 187, avgOrder: 330 },
  { month: 'May', revenue: 55000, orders: 168, avgOrder: 327 },
  { month: 'Jun', revenue: 58000, orders: 175, avgOrder: 331 },
];

const paymentBreakdownData = [
  { name: 'COD', value: 65, amount: 37700, color: '#FFC107' },
  { name: 'Partial Prepayment', value: 25, amount: 14500, color: '#2196F3' },
  { name: 'Full Prepayment', value: 10, amount: 5800, color: '#3CB371' }
];

const topProductsData = [
  { name: 'Green Tea Classic', sales: 145, revenue: 21750 },
  { name: 'Earl Grey Premium', sales: 98, revenue: 19600 },
  { name: 'Jasmine Tea', sales: 87, revenue: 15660 },
  { name: 'Oolong Premium', sales: 65, revenue: 16250 },
  { name: 'Chamomile Tea', sales: 54, revenue: 6480 },
  { name: 'Mint Tea', sales: 43, revenue: 4300 }
];

const customerGrowthData = [
  { month: 'Jan', newCustomers: 25, totalCustomers: 125 },
  { month: 'Feb', newCustomers: 32, totalCustomers: 157 },
  { month: 'Mar', newCustomers: 28, totalCustomers: 185 },
  { month: 'Apr', newCustomers: 41, totalCustomers: 226 },
  { month: 'May', newCustomers: 35, totalCustomers: 261 },
  { month: 'Jun', newCustomers: 38, totalCustomers: 299 },
];

const codStatusData = [
  { status: 'Collected', amount: 25600, percentage: 68 },
  { status: 'Pending', amount: 12100, percentage: 32 }
];

const statsCards = [
  {
    title: 'Total Revenue',
    value: '₹3,19,000',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSign,
    period: 'Last 6 months'
  },
  {
    title: 'Total Orders',
    value: '988',
    change: '+8.3%',
    changeType: 'positive',
    icon: ShoppingCart,
    period: 'Last 6 months'
  },
  {
    title: 'Avg Order Value',
    value: '₹323',
    change: '+2.1%',
    changeType: 'positive',
    icon: TrendingUp,
    period: 'Last 6 months'
  },
  {
    title: 'Active Customers',
    value: '299',
    change: '+15.2%',
    changeType: 'positive',
    icon: Users,
    period: 'Total registered'
  }
];

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const handleExportReport = () => {
    // In a real app, this would generate and download a report
    console.log('Exporting report for period:', selectedPeriod);
  };

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle>Analytics & Reports</CardTitle>
            <div className="flex gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">Last Month</SelectItem>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="1year">Last Year</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={handleExportReport}
                className="bg-[#3CB371] hover:bg-[#2E8B57] text-white"
              >
                <Download size={16} className="mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl mt-2">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.changeType === 'positive' ? (
                        <TrendingUp size={16} className="text-green-500" />
                      ) : (
                        <TrendingDown size={16} className="text-red-500" />
                      )}
                      <span className={`text-sm ${
                        stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{stat.period}</p>
                  </div>
                  <Icon className="h-8 w-8 text-[#3CB371]" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue and Orders Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}`, 'Revenue']} />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3CB371" 
                  fill="#3CB371" 
                  fillOpacity={0.3} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Orders & Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="orders" fill="#3CB371" name="Orders" />
                <Line yAxisId="right" type="monotone" dataKey="avgOrder" stroke="#FFC107" name="Avg Order Value" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Payment Distribution and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Payment Method Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentBreakdownData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {paymentBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name, props) => [
                  `${value}% (₹${props.payload.amount})`, 
                  name
                ]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {paymentBreakdownData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm text-[#3CB371]">₹{item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProductsData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={(value, name) => [
                  name === 'sales' ? `${value} units` : `₹${value}`,
                  name === 'sales' ? 'Units Sold' : 'Revenue'
                ]} />
                <Bar dataKey="sales" fill="#3CB371" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Customer Growth and COD Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="newCustomers" 
                  stroke="#2196F3" 
                  strokeWidth={2}
                  name="New Customers"
                />
                <Line 
                  type="monotone" 
                  dataKey="totalCustomers" 
                  stroke="#3CB371" 
                  strokeWidth={2}
                  name="Total Customers"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>COD Collection Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl text-green-600">₹25,600</p>
                  <p className="text-sm text-gray-600">Collected (68%)</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl text-yellow-600">₹12,100</p>
                  <p className="text-sm text-gray-600">Pending (32%)</p>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={codStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="percentage"
                    label={({ status, percentage }) => `${status}: ${percentage}%`}
                  >
                    <Cell fill="#4CAF50" />
                    <Cell fill="#FFC107" />
                  </Pie>
                  <Tooltip formatter={(value, name, props) => [
                    `${value}% (₹${props.payload.amount})`, 
                    props.payload.status
                  ]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}