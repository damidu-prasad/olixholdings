import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const JobsManager = () => {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', dept: '', location: 'Remote', type: 'Full-time', desc: '', active: true });

  const startEdit = (j) => { setEditing(j.id); setForm({ ...j }); };
  const startNew = () => { setEditing('new'); setForm({ title: '', dept: '', location: 'Remote', type: 'Full-time', desc: '', active: true }); };
  const cancel = () => setEditing(null);
  const save = () => {
    if (editing === 'new') addItem('jobs', form);
    else updateItem('jobs', editing, form);
    cancel();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div><h1 className="admin-page-title">Job Listings</h1><p className="admin-page-sub">Manage career opportunities</p></div>
        <button className="cta-button" onClick={startNew}>+ Add Job</button>
      </div>
      {editing && (
        <div className="admin-form-card admin-modal">
          <h3>{editing === 'new' ? 'Add Job' : 'Edit Job'}</h3>
          <div className="admin-inline-group">
            <div className="admin-form-group" style={{ flex: 1 }}><label>Title</label><input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></div>
            <div className="admin-form-group" style={{ width: 150 }}><label>Department</label><input value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })} /></div>
          </div>
          <div className="admin-inline-group">
            <div className="admin-form-group" style={{ flex: 1 }}><label>Location</label><input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} /></div>
            <div className="admin-form-group" style={{ width: 150 }}><label>Type</label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option>
              </select>
            </div>
            <div className="admin-form-group" style={{ width: 80 }}><label>Active</label>
              <input type="checkbox" checked={form.active} onChange={e => setForm({ ...form, active: e.target.checked })} style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="admin-form-group"><label>Description</label><textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={3} /></div>
          <div className="admin-btn-row"><button className="cta-button" onClick={save}>Save</button><button className="cta-secondary" onClick={cancel}>Cancel</button></div>
        </div>
      )}
      <div className="admin-list">
        {data.jobs.map(j => (
          <div key={j.id} className="admin-list-item">
            <div className="admin-list-content">
              <div className="admin-list-title">{j.title} <span className={`admin-badge ${j.active ? 'admin-badge-active' : 'admin-badge-inactive'}`}>{j.active ? 'Active' : 'Inactive'}</span></div>
              <div className="admin-list-sub">{j.dept} · {j.location} · {j.type}</div>
            </div>
            <div className="admin-btn-row">
              <button className="admin-edit-btn" onClick={() => startEdit(j)}>Edit</button>
              <button className="admin-delete-btn" onClick={() => deleteItem('jobs', j.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsManager;
