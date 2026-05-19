import React from 'react';
import { useData } from '../../context/DataContext';

const Dashboard = () => {
  const { data } = useData();

  const cards = [
    { label: 'Services', count: data.services.length, icon: '⚙️', color: '#6366f1' },
    { label: 'Products', count: data.products.length, icon: '📦', color: '#06b6d4' },
    { label: 'Industries', count: data.industries.length, icon: '🏢', color: '#8b5cf6' },
    { label: 'Reviews', count: data.reviews.length, icon: '⭐', color: '#f59e0b' },
    { label: 'Job Listings', count: data.jobs.filter(j => j.active).length, icon: '💼', color: '#10b981' },
    { label: 'Bookings', count: data.bookings.length, icon: '📅', color: '#ef4444' },
    { label: 'Messages', count: data.contacts.length, icon: '📬', color: '#ec4899' },
    { label: 'Unread Messages', count: data.contacts.filter(c => c.status === 'unread').length, icon: '🔔', color: '#f97316' },
  ];

  const recentBookings = [...data.bookings].reverse().slice(0, 5);
  const recentContacts = [...data.contacts].reverse().slice(0, 5);

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Dashboard</h1>
      <p className="admin-page-sub">Overview of your website content and activity</p>

      <div className="admin-cards-grid">
        {cards.map((c, i) => (
          <div key={i} className="admin-stat-card" style={{ borderLeft: `4px solid ${c.color}` }}>
            <div className="admin-stat-icon">{c.icon}</div>
            <div>
              <div className="admin-stat-count">{c.count}</div>
              <div className="admin-stat-label">{c.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-two-col">
        <div className="admin-table-section">
          <h3>Recent Bookings</h3>
          {recentBookings.length === 0 ? <p className="admin-empty">No bookings yet</p> : (
            <table className="admin-table">
              <thead><tr><th>Name</th><th>Service</th><th>Date</th><th>Status</th></tr></thead>
              <tbody>
                {recentBookings.map(b => (
                  <tr key={b.id}>
                    <td>{b.name}</td><td>{b.service}</td><td>{b.date}</td>
                    <td><span className={`admin-badge admin-badge-${b.status}`}>{b.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="admin-table-section">
          <h3>Recent Messages</h3>
          {recentContacts.length === 0 ? <p className="admin-empty">No messages yet</p> : (
            <table className="admin-table">
              <thead><tr><th>Name</th><th>Subject</th><th>Status</th></tr></thead>
              <tbody>
                {recentContacts.map(c => (
                  <tr key={c.id}>
                    <td>{c.name}</td><td>{c.subject}</td>
                    <td><span className={`admin-badge admin-badge-${c.status}`}>{c.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
