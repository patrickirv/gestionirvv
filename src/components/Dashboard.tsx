import { Card } from '@/components/ui/card';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

export const Dashboard = () => {
  // Mock data - replace with actual data later
  const stats = {
    totalProducts: 150,
    lowStockItems: 8,
    topCategory: 'Electronics',
    totalSales: 25000,
  };

  const lowStockAlerts = [
    { id: 1, name: 'Laptop', stock: 2 },
    { id: 2, name: 'Mouse', stock: 3 },
  ];

  const topCategories = [
    { name: 'Electronics', percentage: 45 },
    { name: 'Accessories', percentage: 30 },
    { name: 'Peripherals', percentage: 25 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold">{stats.totalProducts}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Low Stock Items</p>
              <p className="text-2xl font-bold">{stats.lowStockItems}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Top Category</p>
              <p className="text-2xl font-bold">{stats.topCategory}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold">${stats.totalSales}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Alerts and Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {lowStockAlerts.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-gray-800">{item.name}</span>
                <span className="text-red-600 font-medium">{item.stock} units left</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Selling Categories</h3>
          <div className="space-y-4">
            {topCategories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{category.name}</span>
                  <span className="font-medium">{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};