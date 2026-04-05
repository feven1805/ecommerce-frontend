import React, { useState } from 'react';
import '../../styles/Login.css';

function Login() {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  // 1. Create variables to hold the user's input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. This function connects your button to the URL
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // The Live Backend URL from your screenshot
    const apiURL = 'https://campus-ecommerce-api.onrender.com/api/v1/accounts/auth/login/';

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }), // Sends data to the URL
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Success! You are logged in.");
        // Saves the token so the app knows who you are
        localStorage.setItem('token', data.access); 
      } else {
        // Shows the error message from the Django Backend
        alert("❌ Login Failed: " + (data.detail || "Check your email/password"));
      }
    } catch (error) {
      alert("⚠️ Error: Server not responding. Check your internet.");
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

        {/* 3. The Form now uses handleLogin */}
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
              <span className="forgot-password bold-text">Forgot Password?</span>
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

        <p className="signup-text">
          Don't have an account? <span className="signup-link bold-text">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;