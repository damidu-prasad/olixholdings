import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const emptyProduct = { name: '', tag: '', desc: '', features: ['','','',''], color: '#6366f1' };

const ProductsManager = () => {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyProduct);

  const startEdit = (p) => { setEditing(p.id); setForm({ ...p, features: [...p.features] }); };
  const startNew = () => { setEditing('new'); setForm({ ...emptyProduct, features: ['','','',''] }); };
  const cancel = () => { setEditing(null); };
  const handleFeature = (i, v) => { const f = [...form.features]; f[i] = v; setForm({ ...form, features: f }); };
  const save = () => {
    const cleaned = { ...form, features: form.features.filter(f => f.trim()) };
    if (editing === 'new') addItem('products', cleaned);
    else updateItem('products', editing, cleaned);
    cancel();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div><h1 className="admin-page-title">Products</h1><p className="admin-page-sub">Manage your product catalog</p></div>
        <button className="cta-button" onClick={startNew}>+ Add Product</button>
      </div>
      {editing && (
        <div className="admin-form-card admin-modal">
          <h3>{editing === 'new' ? 'Add Product' : 'Edit Product'}</h3>
          <div className="admin-inline-group">
            <div className="admin-form-group" style={{ flex: 1 }}><label>Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
            <div className="admin-form-group" style={{ width: 150 }}><label>Tag</label><input value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} /></div>
            <div className="admin-form-group" style={{ width: 80 }}><label>Color</label><input type="color" value={form.color} onChange={e => setForm({ ...form, color: e.target.value })} /></div>
          </div>
          <div className="admin-form-group"><label>Description</label><textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={3} /></div>
          <div className="admin-form-group"><label>Features</label>
            {form.features.map((f, i) => (<input key={i} value={f} onChange={e => handleFeature(i, e.target.value)} placeholder={`Feature ${i+1}`} style={{ marginBottom: 6 }} />))}
            <button className="admin-text-btn" onClick={() => setForm({ ...form, features: [...form.features, ''] })}>+ Add Feature</button>
          </div>
          <div className="admin-btn-row"><button className="cta-button" onClick={save}>Save</button><button className="cta-secondary" onClick={cancel}>Cancel</button></div>
        </div>
      )}
      <div className="admin-list">
        {data.products.map(p => (
          <div key={p.id} className="admin-list-item">
            <div className="admin-list-color" style={{ background: p.color }}></div>
            <div className="admin-list-content"><div className="admin-list-title">{p.name}</div><div className="admin-list-sub">{p.tag}</div></div>
            <div className="admin-btn-row"><button className="admin-edit-btn" onClick={() => startEdit(p)}>Edit</button><button className="admin-delete-btn" onClick={() => deleteItem('products', p.id)}>Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsManager;
