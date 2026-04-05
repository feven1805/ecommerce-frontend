import React, { useState } from 'react';
import '../../styles/Login.css';

function Login() {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const apiURL = 'https://campus-ecommerce-api.onrender.com/api/v1/accounts/auth/login/';

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Success! You are logged in.");
        localStorage.setItem('token', data.access);
      } else {
        alert("❌ Login Failed: " + (data.detail || "Check credentials"));
      }
    } catch (error) {
      alert("⚠️ Server Error. Check internet connection.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand-icon-circle">🎓</div>
        <h1 className="brand-title">SCHOLAR MODERN</h1>
        <p className="brand-subtitle">Welcome back to the flagship campus store</p>

        <div className="role-selector">
          <button 
            type="button" 
            className={`role-item ${role === 'student' ? 'active' : ''}`} 
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button 
            type="button" 
            className={`role-item ${role === 'vendor' ? 'active' : ''}`} 
            onClick={() => setRole('vendor')}
          >
            Vendor
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label bold-text">EMAIL</label>
            <div className="input-field-wrapper">
              <span className="field-icon">✉️</span>
              <input 
                type="email" 
                className="main-input" 
                placeholder="name@campus.edu" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="label-row">
              <label className="input-label bold-text">PASSWORD</label>
            </div>
            <div className="input-field-wrapper">
              <span className="field-icon">🔒</span>
              <input 
                type={showPassword ? "text" : "password"} 
                className="main-input" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">LOGIN →</button>
        </form>
      </div>
    </div>
  );
}

export default Login;