import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Logo from '../components/Logo';

const AdminLogin = () => {
  const { login } = useData();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(password)) setError('Invalid password');
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <Logo size={48} variant="light" />
        </div>
        <h2>Admin Panel</h2>
        <p>Enter your password to access the dashboard</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password" placeholder="Password"
            value={password} onChange={e => { setPassword(e.target.value); setError(''); }}
          />
          {error && <div className="admin-error">{error}</div>}
          <button type="submit" className="cta-button" style={{ width: '100%' }}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
