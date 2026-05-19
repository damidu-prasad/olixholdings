import React from 'react';
import { useData } from '../../context/DataContext';

const BookingsManager = () => {
  const { data, updateItem, deleteItem } = useData();
  const bookings = [...data.bookings].reverse();

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Bookings</h1>
      <p className="admin-page-sub">Manage consultation appointments ({bookings.length} total)</p>

      {bookings.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-icon">📅</div>
          <p>No bookings yet. When clients book consultations, they'll appear here.</p>
        </div>
      ) : (
        <div className="admin-list">
          {bookings.map(b => (
            <div key={b.id} className="admin-list-item admin-list-item-detail">
              <div className="admin-list-content" style={{ flex: 1 }}>
                <div className="admin-list-title">{b.name} <span className={`admin-badge admin-badge-${b.status}`}>{b.status}</span></div>
                <div className="admin-list-sub">{b.email} {b.phone && `· ${b.phone}`}</div>
                <div className="admin-list-meta">
                  <span>📅 {b.date}</span>
                  <span>🕐 {b.time}</span>
                  <span>🛠️ {b.service}</span>
                  {b.company && <span>🏢 {b.company}</span>}
                </div>
                {b.notes && <div className="admin-list-notes">📝 {b.notes}</div>}
              </div>
              <div className="admin-btn-col">
                <select value={b.status} onChange={e => updateItem('bookings', b.id, { status: e.target.value })} className="admin-status-select">
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <button className="admin-delete-btn" onClick={() => deleteItem('bookings', b.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingsManager;
