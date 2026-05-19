import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const emptyService = { icon: '⚙️', title: '', desc: '', features: ['','','',''] };

const ServicesManager = () => {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyService);

  const startEdit = (s) => { setEditing(s.id); setForm({ ...s, features: [...s.features] }); };
  const startNew = () => { setEditing('new'); setForm({ ...emptyService, features: ['','','',''] }); };
  const cancel = () => { setEditing(null); setForm(emptyService); };

  const handleFeature = (i, v) => { const f = [...form.features]; f[i] = v; setForm({ ...form, features: f }); };

  const save = () => {
    const cleaned = { ...form, features: form.features.filter(f => f.trim()) };
    if (editing === 'new') addItem('services', cleaned);
    else updateItem('services', editing, cleaned);
    cancel();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div><h1 className="admin-page-title">Services</h1><p className="admin-page-sub">Manage your service offerings</p></div>
        <button className="cta-button" onClick={startNew}>+ Add Service</button>
      </div>

      {editing && (
        <div className="admin-form-card admin-modal">
          <h3>{editing === 'new' ? 'Add Service' : 'Edit Service'}</h3>
          <div className="admin-inline-group">
            <div className="admin-form-group" style={{ width: 80 }}>
              <label>Icon</label>
              <input value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} />
            </div>
            <div className="admin-form-group" style={{ flex: 1 }}>
              <label>Title</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>
          </div>
          <div className="admin-form-group">
            <label>Description</label>
            <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={3} />
          </div>
          <div className="admin-form-group">
            <label>Features (one per line)</label>
            {form.features.map((f, i) => (
              <input key={i} value={f} onChange={e => handleFeature(i, e.target.value)} placeholder={`Feature ${i+1}`} style={{ marginBottom: 6 }} />
            ))}
            <button className="admin-text-btn" onClick={() => setForm({ ...form, features: [...form.features, ''] })}>+ Add Feature</button>
          </div>
          <div className="admin-btn-row">
            <button className="cta-button" onClick={save}>Save</button>
            <button className="cta-secondary" onClick={cancel}>Cancel</button>
          </div>
        </div>
      )}

      <div className="admin-list">
        {data.services.map(s => (
          <div key={s.id} className="admin-list-item">
            <div className="admin-list-icon">{s.icon}</div>
            <div className="admin-list-content">
              <div className="admin-list-title">{s.title}</div>
              <div className="admin-list-sub">{s.desc.slice(0, 80)}...</div>
            </div>
            <div className="admin-btn-row">
              <button className="admin-edit-btn" onClick={() => startEdit(s)}>Edit</button>
              <button className="admin-delete-btn" onClick={() => deleteItem('services', s.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesManager;
