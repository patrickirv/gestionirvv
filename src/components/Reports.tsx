import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Reports = () => {
  // Mock data - replace with actual data later
  const categoryData = [
    { name: 'Electronics', sales: 4500 },
    { name: 'Accessories', sales: 3000 },
    { name: 'Peripherals', sales: 2500 },
  ];

  const lowStockItems = [
    { id: 1, name: 'Laptop', stock: 2, minStock: 5 },
    { id: 2, name: 'Mouse', stock: 3, minStock: 10 },
    { id: 3, name: 'Keyboard', stock: 4, minStock: 8 },
  ];

  const handleExport = () => {
    // Implement export functionality
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
        <Button onClick={handleExport} className="flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Export to Excel
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Items</h3>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Min. Stock: {item.minStock}
                  </p>
                </div>
                <span className="text-red-600 font-medium">
                  {item.stock} units left
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};