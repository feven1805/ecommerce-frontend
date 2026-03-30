import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminDashboard from './pages/AdminDashboard';
import VendorManagement from './pages/VendorManagement';
import ProductModeration from './pages/ProductModeration';
import ReviewModeration from './pages/ReviewModeration';
import './App.css';
import Login from './pages/accounts/Login';
// Placeholder Pages
const Settings = () => <div className="p-8"><h1>Settings</h1><p>System settings.</p></div>;

function Layout() {
  return (
    <div id="root">
      <Sidebar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="vendors" element={<VendorManagement />} />
          <Route path="products" element={<ProductModeration />} />
          <Route path="reviews" element={<ReviewModeration />} />
          <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
