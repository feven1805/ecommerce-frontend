import React, { useState, useEffect } from 'react';
import { FiTruck, FiCreditCard, FiMapPin, FiHeadphones, FiPackage, FiDollarSign, FiHardDrive, FiShield, FiUsers, FiPlus, FiImage, FiGlobe } from 'react-icons/fi';

function VendorPortal() {
  const [orders, setOrders] = useState([
    {
      id: 'Joker Dreamer',
      product: '1x 24,000 x 10-20 AW',
      quantity: 1,
      price: 2500,
      status: 'completed'
    },
    {
      id: 'Aviar Wing',
      product: '1x 24,000 x 10-20 AW',
      quantity: 1,
      price: 1000,
      status: 'processing'
    },
    {
      id: 'Maria Shoveller',
      product: '1x 24,000 x 10-20 AW',
      quantity: 1,
      price: 1000,
      status: 'shipped'
    },
    {
      id: 'Toby Chen',
      product: '1x 24,000 x 10-20 AW',
      quantity: 1,
      price: 3000,
      status: 'delivered'
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '0.00',
    description: '',
    isPublic: true,
    image: null
  });

  const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
  const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);

  const collectionItems = [
    {
      id: 1,
      name: 'Accounts Pro Backups',
      description: 'Backup your data securely.',
      icon: FiHardDrive,
      color: '#10b981'
    },
    {
      id: 2,
      name: 'Managed Flash Drive',
      description: 'Secure storage for files.',
      icon: FiShield,
      color: '#3b82f6'
    },
    {
      id: 3,
      name: 'Customer Essentials',
      description: 'Access to essential tools.',
      icon: FiUsers,
      color: '#8b5cf6'
    }
  ];

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', newProduct);
    alert('Product created successfully!');
    setNewProduct({
      name: '',
      price: '0.00',
      description: '',
      isPublic: true,
      image: null
    });
  };

  return (
    <div className="vendor-portal">
      <div className="portal-header">
        <h1>Vendor Portal</h1>
        <p>Orders Management</p>
      </div>

      {/* Stats Cards */}
      <div className="portal-stats">
        <div className="portal-stat-card">
          <div className="portal-stat-icon" style={{ background: '#10b981' }}>
            <FiDollarSign />
          </div>
          <div>
            <h3>Total Orders</h3>
            <p className="portal-stat-value">${totalRevenue.toLocaleString()}</p>
          </div>
        </div>
        <div className="portal-stat-card">
          <div className="portal-stat-icon" style={{ background: '#3b82f6' }}>
            <FiPackage />
          </div>
          <div>
            <h3>Total Items</h3>
            <p className="portal-stat-value">{totalItems} items</p>
          </div>
        </div>
      </div>

      {/* MY COLLECTION Section */}
      <div className="my-collection">
        <div className="collection-header">
          <h2>MY COLLECTION</h2>
          <p>Manage your digital storefront. High performance and security.</p>
        </div>
        <div className="collection-grid">
          {collectionItems.map((item) => (
            <div key={item.id} className="collection-card">
              <div className="collection-icon" style={{ background: item.color }}>
                <item.icon />
              </div>
              <div className="collection-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="collection-footer">
          <span>Sharing 3 of 45 results</span>
        </div>
      </div>

      {/* ROO NEW PRODUCT Section - NEW */}
      <div className="new-product-section">
        <div className="new-product-header">
          <h2>
            <FiPlus className="header-icon" />
            ADD NEW PRODUCT
          </h2>
          <p>Create your next campus essentials.</p>
        </div>
        
        <form onSubmit={handleProductSubmit} className="new-product-form">
          {/* Product Name */}
          <div className="form-row">
            <label>Product Name</label>
            <input 
              type="text" 
              placeholder="e.g. Technical Field Jacket"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              required
            />
          </div>

          {/* Image Upload */}
          <div className="form-row">
            <label>Product Images</label>
            <div className="image-upload-area">
              <FiImage className="upload-icon" />
              <p>Drag files here or browse</p>
              <span>Buy on Roo File Store Online</span>
              <input type="file" accept="image/*" />
            </div>
          </div>

          {/* Product Name second field (from picture) */}
          <div className="form-row">
            <label>Product Name</label>
            <input 
              type="text" 
              placeholder="Drug Technical Field Select"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
          </div>

          {/* Price */}
          <div className="form-row">
            <label>Price Unit</label>
            <div className="price-input">
              <span className="currency">$</span>
              <input 
                type="number" 
                step="0.01"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-row">
            <label>Description</label>
            <textarea 
              rows="4"
              placeholder="Describe the product's unique value, margins, and company appeal."
              value={newProduct.description}
              onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
            />
          </div>

          {/* Public Product Toggle */}
          <div className="form-row toggle-row">
            <label className="toggle-label">
              <FiGlobe className="toggle-icon" />
              Public Product?
            </label>
            <div className="toggle-switch">
              <button 
                type="button"
                className={`toggle-option ${newProduct.isPublic ? 'active' : ''}`}
                onClick={() => setNewProduct({...newProduct, isPublic: true})}
              >
                Yes
              </button>
              <button 
                type="button"
                className={`toggle-option ${!newProduct.isPublic ? 'active' : ''}`}
                onClick={() => setNewProduct({...newProduct, isPublic: false})}
              >
                No
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-product-btn">
            Create Product
          </button>
        </form>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        <h3>Recent Orders</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>${order.price.toLocaleString()}</td>
                <td>
                  <span className={`order-status ${order.status}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inventory Report */}
      <div className="inventory-report">
        <h3>Inventory Report</h3>
        <p>List of inventory items with their quantity and price.</p>
        <button className="report-btn">Download Report</button>
      </div>

      {/* Portal Features */}
      <div className="portal-features">
        <div className="feature-card">
          <FiTruck className="feature-icon" />
          <h4>Order Status</h4>
          <p>Track your orders in real-time</p>
        </div>
        <div className="feature-card">
          <FiCreditCard className="feature-icon" />
          <h4>Payment Options</h4>
          <p>Manage your payment methods</p>
        </div>
        <div className="feature-card">
          <FiMapPin className="feature-icon" />
          <h4>Shipping Information</h4>
          <p>Update shipping details</p>
        </div>
        <div className="feature-card">
          <FiHeadphones className="feature-icon" />
          <h4>Customer Support</h4>
          <p>24/7 support available</p>
        </div>
      </div>
    </div>
  );
}

export default VendorPortal;