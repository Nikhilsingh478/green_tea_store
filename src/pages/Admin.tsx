import React, { useState } from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { Dashboard } from '@/components/Dashboard';
import { Orders } from '@/components/Orders';
import { Products } from '@/components/Products';
import { Customers } from '@/components/Customers';
import { Reports } from '@/components/Reports';
import { Settings } from '@/components/Settings';

export default function Admin() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
      case 'customers':
        return <Customers />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminLayout 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      >
        {renderContent()}
      </AdminLayout>
    </div>
  );
}