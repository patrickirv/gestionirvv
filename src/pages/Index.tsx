import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { Products } from '@/components/Products';
import { Sales } from '@/components/Sales';
import { Reports } from '@/components/Reports';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'products' && <Products />}
      {activeTab === 'sales' && <Sales />}
      {activeTab === 'reports' && <Reports />}
    </Layout>
  );
};

export default Index;