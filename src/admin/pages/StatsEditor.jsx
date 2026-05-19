import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const StatsEditor = () => {
  const { data, updateItem } = useData();
  const [saved, setSaved] = useState(false);

  const handleChange = (id, field, value) => {
    updateItem('stats', id, { [field]: field === 'value' ? Number(value) : value });
  };

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Stats Bar</h1>
      <p className="admin-page-sub">Edit the animated statistics displayed on the homepage</p>
      <div className="admin-form-card">
        {data.stats.map(stat => (
          <div key={stat.id} className="admin-inline-group">
            <div className="admin-form-group" style={{ flex: 1 }}>
              <label>Label</label>
              <input value={stat.label} onChange={e => handleChange(stat.id, 'label', e.target.value)} />
            </div>
            <div className="admin-form-group" style={{ width: 100 }}>
              <label>Value</label>
              <input type="number" value={stat.value} onChange={e => handleChange(stat.id, 'value', e.target.value)} />
            </div>
            <div className="admin-form-group" style={{ width: 60 }}>
              <label>Suffix</label>
              <input value={stat.suffix} onChange={e => handleChange(stat.id, 'suffix', e.target.value)} />
            </div>
          </div>
        ))}
        <button className="cta-button" onClick={handleSave}>{saved ? '✓ Saved!' : 'Save Changes'}</button>
      </div>
    </div>
  );
};

export default StatsEditor;
