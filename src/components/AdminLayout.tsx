import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings,
  Menu,
  Bell,
  LogOut,
  ChevronLeft
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Panel', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function AdminLayout({ children, activeSection, setActiveSection }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`bg-sidebar text-sidebar-foreground transition-all duration-300 shadow-lg ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      } flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <h2 className="text-xl font-bold text-sidebar-foreground brand-font">Green Tea Admin</h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {sidebarCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm font-medium' 
                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:shadow-sm'
                    }`}
                  >
                    <Icon size={20} />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-foreground capitalize font-bold">
                {activeSection === 'dashboard' ? 'Panel' : activeSection}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <Button variant="ghost" size="sm" className="relative hover:bg-accent">
                  <Bell size={20} className="text-foreground" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs p-0 flex items-center justify-center font-medium">
                    3
                  </Badge>
                </Button>
              </div>

              {/* Admin Profile */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/32/32" />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">AD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm text-foreground font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@greentea.com</p>
                </div>
              </div>

              {/* Logout */}
              <Button variant="ghost" size="sm" className="text-foreground hover:text-destructive hover:bg-destructive/10">
                <LogOut size={20} />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}