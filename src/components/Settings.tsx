import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  User, 
  Bell, 
  CreditCard, 
  Truck, 
  Shield, 
  Mail, 
  Phone,
  Save,
  Upload,
  Key
} from 'lucide-react';

export function Settings() {
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@greentea.com',
    phone: '+91 9876543210',
    company: 'Green Tea Store',
    address: '123 Tea Garden Lane, Mumbai, Maharashtra'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNewOrders: true,
    emailPayments: true,
    emailInventory: true,
    smsNewOrders: false,
    smsPayments: true,
    pushNotifications: true
  });

  const [paymentSettings, setPaymentSettings] = useState({
    razorpayKeyId: 'rzp_test_xxxxxxxxxxxxx',
    razorpaySecretKey: '••••••••••••••••',
    codEnabled: true,
    prepaymentEnabled: true,
    partialPaymentEnabled: true,
    minimumCodAmount: '100',
    maximumCodAmount: '5000'
  });

  const [courierSettings, setCourierSettings] = useState({
    defaultCourier: 'delhivery',
    delhiveryToken: '••••••••••••••••',
    bluedartToken: '••••••••••••••••',
    dtdcToken: '••••••••••••••••',
    autoAssignCourier: true,
    defaultDeliveryDays: '3-5'
  });

  const handleSaveProfile = () => {
    console.log('Saving profile:', profileData);
  };

  const handleSaveNotifications = () => {
    console.log('Saving notifications:', notificationSettings);
  };

  const handleSavePayments = () => {
    console.log('Saving payments:', paymentSettings);
  };

  const handleSaveCourier = () => {
    console.log('Saving courier:', courierSettings);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
      </Card>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User size={16} />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell size={16} />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center gap-2">
            <CreditCard size={16} />
            Payments
          </TabsTrigger>
          <TabsTrigger value="courier" className="flex items-center gap-2">
            <Truck size={16} />
            Courier
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/api/placeholder/80/80" />
                    <AvatarFallback className="bg-[#3CB371] text-white text-xl">AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      <Upload size={16} className="mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      rows={3}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveProfile} className="w-full bg-[#3CB371] hover:bg-[#2E8B57] text-white">
                  <Save size={16} className="mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Key size={16} className="mr-2" />
                  Update Password
                </Button>

                <div className="border-t pt-6">
                  <h4 className="text-lg mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Enable 2FA for added security</p>
                      <p className="text-xs text-gray-500">Recommended for admin accounts</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Notifications */}
                <div>
                  <h4 className="text-lg mb-4 flex items-center gap-2">
                    <Mail size={20} />
                    Email Notifications
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">New Orders</p>
                        <p className="text-xs text-gray-500">Get notified when new orders are placed</p>
                      </div>
                      <Switch
                        checked={notificationSettings.emailNewOrders}
                        onCheckedChange={(checked) => 
                          setNotificationSettings({...notificationSettings, emailNewOrders: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">Payment Updates</p>
                        <p className="text-xs text-gray-500">Payment confirmations and failures</p>
                      </div>
                      <Switch
                        checked={notificationSettings.emailPayments}
                        onCheckedChange={(checked) => 
                          setNotificationSettings({...notificationSettings, emailPayments: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">Inventory Alerts</p>
                        <p className="text-xs text-gray-500">Low stock and out of stock alerts</p>
                      </div>
                      <Switch
                        checked={notificationSettings.emailInventory}
                        onCheckedChange={(checked) => 
                          setNotificationSettings({...notificationSettings, emailInventory: checked})
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* SMS Notifications */}
                <div>
                  <h4 className="text-lg mb-4 flex items-center gap-2">
                    <Phone size={20} />
                    SMS Notifications
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">New Orders</p>
                        <p className="text-xs text-gray-500">SMS alerts for urgent orders</p>
                      </div>
                      <Switch
                        checked={notificationSettings.smsNewOrders}
                        onCheckedChange={(checked) => 
                          setNotificationSettings({...notificationSettings, smsNewOrders: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">Payment Updates</p>
                        <p className="text-xs text-gray-500">Important payment notifications</p>
                      </div>
                      <Switch
                        checked={notificationSettings.smsPayments}
                        onCheckedChange={(checked) => 
                          setNotificationSettings({...notificationSettings, smsPayments: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">Push Notifications</p>
                        <p className="text-xs text-gray-500">Browser push notifications</p>
                      </div>
                      <Switch
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={(checked) => 
                          setNotificationSettings({...notificationSettings, pushNotifications: checked})
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveNotifications} className="bg-[#3CB371] hover:bg-[#2E8B57] text-white">
                <Save size={16} className="mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments">
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Razorpay Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="razorpayKeyId">Key ID</Label>
                  <Input
                    id="razorpayKeyId"
                    value={paymentSettings.razorpayKeyId}
                    onChange={(e) => setPaymentSettings({...paymentSettings, razorpayKeyId: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="razorpaySecretKey">Secret Key</Label>
                  <Input
                    id="razorpaySecretKey"
                    type="password"
                    value={paymentSettings.razorpaySecretKey}
                    onChange={(e) => setPaymentSettings({...paymentSettings, razorpaySecretKey: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Cash on Delivery (COD)</p>
                      <p className="text-xs text-gray-500">Allow customers to pay on delivery</p>
                    </div>
                    <Switch
                      checked={paymentSettings.codEnabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({...paymentSettings, codEnabled: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Online Prepayment</p>
                      <p className="text-xs text-gray-500">Full payment before shipping</p>
                    </div>
                    <Switch
                      checked={paymentSettings.prepaymentEnabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({...paymentSettings, prepaymentEnabled: checked})
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Partial Prepayment</p>
                      <p className="text-xs text-gray-500">Partial payment + COD for remaining</p>
                    </div>
                    <Switch
                      checked={paymentSettings.partialPaymentEnabled}
                      onCheckedChange={(checked) => 
                        setPaymentSettings({...paymentSettings, partialPaymentEnabled: checked})
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="minCod">Minimum COD Amount (₹)</Label>
                    <Input
                      id="minCod"
                      type="number"
                      value={paymentSettings.minimumCodAmount}
                      onChange={(e) => setPaymentSettings({...paymentSettings, minimumCodAmount: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="maxCod">Maximum COD Amount (₹)</Label>
                    <Input
                      id="maxCod"
                      type="number"
                      value={paymentSettings.maximumCodAmount}
                      onChange={(e) => setPaymentSettings({...paymentSettings, maximumCodAmount: e.target.value})}
                    />
                  </div>
                </div>

                <Button onClick={handleSavePayments} className="bg-[#3CB371] hover:bg-[#2E8B57] text-white">
                  <Save size={16} className="mr-2" />
                  Save Payment Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Courier Settings */}
        <TabsContent value="courier">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Courier Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="defaultCourier">Default Courier Partner</Label>
                <Select value={courierSettings.defaultCourier} onValueChange={(value) => 
                  setCourierSettings({...courierSettings, defaultCourier: value})
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select default courier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhivery">Delhivery</SelectItem>
                    <SelectItem value="bluedart">Blue Dart</SelectItem>
                    <SelectItem value="dtdc">DTDC</SelectItem>
                    <SelectItem value="ecom">Ecom Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="delhiveryToken">Delhivery API Token</Label>
                  <Input
                    id="delhiveryToken"
                    type="password"
                    value={courierSettings.delhiveryToken}
                    onChange={(e) => setCourierSettings({...courierSettings, delhiveryToken: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="bluedartToken">Blue Dart API Token</Label>
                  <Input
                    id="bluedartToken"
                    type="password"
                    value={courierSettings.bluedartToken}
                    onChange={(e) => setCourierSettings({...courierSettings, bluedartToken: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="dtdcToken">DTDC API Token</Label>
                  <Input
                    id="dtdcToken"
                    type="password"
                    value={courierSettings.dtdcToken}
                    onChange={(e) => setCourierSettings({...courierSettings, dtdcToken: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Auto-assign Courier</p>
                    <p className="text-xs text-gray-500">Automatically select best courier for each order</p>
                  </div>
                  <Switch
                    checked={courierSettings.autoAssignCourier}
                    onCheckedChange={(checked) => 
                      setCourierSettings({...courierSettings, autoAssignCourier: checked})
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="deliveryDays">Default Delivery Time</Label>
                  <Select value={courierSettings.defaultDeliveryDays} onValueChange={(value) => 
                    setCourierSettings({...courierSettings, defaultDeliveryDays: value})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 Days</SelectItem>
                      <SelectItem value="2-3">2-3 Days</SelectItem>
                      <SelectItem value="3-5">3-5 Days</SelectItem>
                      <SelectItem value="5-7">5-7 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSaveCourier} className="bg-[#3CB371] hover:bg-[#2E8B57] text-white">
                <Save size={16} className="mr-2" />
                Save Courier Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}