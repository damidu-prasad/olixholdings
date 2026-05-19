import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const ReviewsManager = () => {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', role: '', text: '', rating: 5 });

  const startEdit = (r) => { setEditing(r.id); setForm({ ...r }); };
  const startNew = () => { setEditing('new'); setForm({ name: '', role: '', text: '', rating: 5 }); };
  const cancel = () => setEditing(null);
  const save = () => {
    if (editing === 'new') addItem('reviews', form);
    else updateItem('reviews', editing, form);
    cancel();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div><h1 className="admin-page-title">Reviews</h1><p className="admin-page-sub">Manage client testimonials</p></div>
        <button className="cta-button" onClick={startNew}>+ Add Review</button>
      </div>
      {editing && (
        <div className="admin-form-card admin-modal">
          <h3>{editing === 'new' ? 'Add Review' : 'Edit Review'}</h3>
          <div className="admin-inline-group">
            <div className="admin-form-group" style={{ flex: 1 }}><label>Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
            <div className="admin-form-group" style={{ flex: 1 }}><label>Role / Company</label><input value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} /></div>
            <div className="admin-form-group" style={{ width: 80 }}><label>Rating</label><input type="number" min={1} max={5} value={form.rating} onChange={e => setForm({ ...form, rating: Number(e.target.value) })} /></div>
          </div>
          <div className="admin-form-group"><label>Testimonial</label><textarea value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} rows={3} /></div>
          <div className="admin-btn-row"><button className="cta-button" onClick={save}>Save</button><button className="cta-secondary" onClick={cancel}>Cancel</button></div>
        </div>
      )}
      <div className="admin-list">
        {data.reviews.map(r => (
          <div key={r.id} className="admin-list-item">
            <div className="admin-list-avatar">{r.name.charAt(0)}</div>
            <div className="admin-list-content">
              <div className="admin-list-title">{r.name} <span style={{ color: '#fbbf24' }}>{'★'.repeat(r.rating)}</span></div>
              <div className="admin-list-sub">{r.role} — "{r.text.slice(0, 60)}..."</div>
            </div>
            <div className="admin-btn-row"><button className="admin-edit-btn" onClick={() => startEdit(r)}>Edit</button><button className="admin-delete-btn" onClick={() => deleteItem('reviews', r.id)}>Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsManager;
