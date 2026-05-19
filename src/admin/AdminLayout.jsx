import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import Logo from '../components/Logo';

const AdminLayout = () => {
  const { logout } = useData();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/admin'); };

  const links = [
    { to: '/admin', icon: '📊', label: 'Dashboard', end: true },
    { to: '/admin/hero', icon: '🎯', label: 'Hero Section' },
    { to: '/admin/stats', icon: '📈', label: 'Stats' },
    { to: '/admin/services', icon: '⚙️', label: 'Services' },
    { to: '/admin/products', icon: '📦', label: 'Products' },
    { to: '/admin/industries', icon: '🏢', label: 'Industries' },
    { to: '/admin/reviews', icon: '⭐', label: 'Reviews' },
    { to: '/admin/jobs', icon: '💼', label: 'Job Listings' },
    { to: '/admin/bookings', icon: '📅', label: 'Bookings' },
    { to: '/admin/contacts', icon: '📬', label: 'Messages' },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <Logo size={28} variant="light" />
          <span>OLIX ADMIN</span>
        </div>
        <nav className="admin-nav">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `admin-nav-link ${isActive ? 'admin-nav-active' : ''}`}>
              <span>{l.icon}</span> {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <a href="/" target="_blank" className="admin-nav-link">🌐 View Site</a>
          <button onClick={handleLogout} className="admin-nav-link admin-logout-btn">🚪 Logout</button>
        </div>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
