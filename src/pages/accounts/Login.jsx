import React, { useState } from 'react';
import '../../styles/Login.css';

function Login() {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand-icon-circle">🎓</div>
        <h1 className="brand-title">SCHOLAR MODERN</h1>
        <p className="brand-subtitle">Welcome back to the flagship campus store</p>

        <div className="role-selector">
          <button 
            className={`role-item ${role === 'student' ? 'active' : ''}`}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button 
            className={`role-item ${role === 'vendor' ? 'active' : ''}`}
            onClick={() => setRole('vendor')}
          >
            Vendor
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="input-label bold-text">EMAIL OR PHONE</label>
            <div className="input-field-wrapper">
              <span className="field-icon">✉️</span>
              <input type="text" className="main-input" placeholder="name@campus.edu" />
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
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button className="login-button">LOGIN →</button>
        </form>

        <p className="signup-text">
          Don't have an account? <span className="signup-link bold-text">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;