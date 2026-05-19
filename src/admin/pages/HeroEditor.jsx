import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const HeroEditor = () => {
  const { data, updateField } = useData();
  const [title, setTitle] = useState(data.heroTitle);
  const [subtitle, setSubtitle] = useState(data.heroSubtitle);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateField('heroTitle', title);
    updateField('heroSubtitle', subtitle);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Hero Section</h1>
      <p className="admin-page-sub">Edit the main hero section on the homepage</p>
      <div className="admin-form-card">
        <div className="admin-form-group">
          <label>Hero Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="admin-form-group">
          <label>Hero Subtitle / Description</label>
          <textarea value={subtitle} onChange={e => setSubtitle(e.target.value)} rows={4} />
        </div>
        <button className="cta-button" onClick={handleSave}>
          {saved ? '✓ Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default HeroEditor;
