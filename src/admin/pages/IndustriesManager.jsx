import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const IndustriesManager = () => {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ icon: '🏢', name: '', desc: '' });

  const startEdit = (ind) => { setEditing(ind.id); setForm({ ...ind }); };
  const startNew = () => { setEditing('new'); setForm({ icon: '🏢', name: '', desc: '' }); };
  const cancel = () => setEditing(null);
  const save = () => {
    if (editing === 'new') addItem('industries', form);
    else updateItem('industries', editing, form);
    cancel();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div><h1 className="admin-page-title">Industries</h1><p className="admin-page-sub">Manage industries you serve</p></div>
        <button className="cta-button" onClick={startNew}>+ Add Industry</button>
      </div>
      {editing && (
        <div className="admin-form-card admin-modal">
          <h3>{editing === 'new' ? 'Add Industry' : 'Edit Industry'}</h3>
          <div className="admin-inline-group">
            <div className="admin-form-group" style={{ width: 80 }}><label>Icon</label><input value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} /></div>
            <div className="admin-form-group" style={{ flex: 1 }}><label>Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
          </div>
          <div className="admin-form-group"><label>Description</label><textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={2} /></div>
          <div className="admin-btn-row"><button className="cta-button" onClick={save}>Save</button><button className="cta-secondary" onClick={cancel}>Cancel</button></div>
        </div>
      )}
      <div className="admin-list">
        {data.industries.map(ind => (
          <div key={ind.id} className="admin-list-item">
            <div className="admin-list-icon">{ind.icon}</div>
            <div className="admin-list-content"><div className="admin-list-title">{ind.name}</div><div className="admin-list-sub">{ind.desc}</div></div>
            <div className="admin-btn-row"><button className="admin-edit-btn" onClick={() => startEdit(ind)}>Edit</button><button className="admin-delete-btn" onClick={() => deleteItem('industries', ind.id)}>Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesManager;
