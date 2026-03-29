import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">
        Welcome back 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="text-2xl font-bold mt-2">24</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">56</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-sm text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold mt-2">$1,240</h2>
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow border">
        <h2 className="font-semibold mb-4">Recent Orders</h2>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>#GH-1024 - Pending</li>
          <li>#GH-1025 - Shipped</li>
          <li>#GH-1026 - Delivered</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;