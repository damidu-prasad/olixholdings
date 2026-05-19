import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const HeroEditor = () => {
  const { data, updateField } = useData();
  const [title, setTitle] = useState(data.heroTitle);
  const [subtitle, setSubtitle] = useState(data.heroSubtitle);
  const [logoImage, setLogoImage] = useState(data.logoImage);
  const [saved, setSaved] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoImage(null);
  };

  const handleSave = () => {
    updateField('heroTitle', title);
    updateField('heroSubtitle', subtitle);
    updateField('logoImage', logoImage);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Site & Hero Settings</h1>
      <p className="admin-page-sub">Edit the main hero section and site branding</p>
      
      <div className="admin-form-card">
        <h3>Branding</h3>
        <div className="admin-form-group">
          <label>Site Logo (Symbol)</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            {logoImage ? (
              <img src={logoImage} alt="Site Logo" style={{ width: 64, height: 64, objectFit: 'contain', background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 4 }} />
            ) : (
              <div style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.05)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.8rem' }}>Default</div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input type="file" accept="image/png, image/jpeg, image/svg+xml" onChange={handleImageUpload} style={{ fontSize: '0.8rem' }} />
              {logoImage && <button className="admin-text-btn" style={{ color: '#ef4444', textAlign: 'left' }} onClick={handleRemoveLogo}>Remove Custom Logo</button>}
            </div>
          </div>
        </div>
      </div>

      <div className="admin-form-card">
        <h3>Hero Section</h3>
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
