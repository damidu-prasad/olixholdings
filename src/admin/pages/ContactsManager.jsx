import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const ContactsManager = () => {
  const { data, updateItem, deleteItem } = useData();
  const contacts = [...data.contacts].reverse();
  const [selected, setSelected] = useState(null);

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Messages</h1>
      <p className="admin-page-sub">Contact form submissions ({contacts.filter(c => c.status === 'unread').length} unread)</p>

      {contacts.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-icon">📬</div>
          <p>No messages yet. Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="admin-messages-layout">
          <div className="admin-messages-list">
            {contacts.map(c => (
              <div key={c.id}
                className={`admin-message-item ${c.status === 'unread' ? 'admin-message-unread' : ''} ${selected?.id === c.id ? 'admin-message-selected' : ''}`}
                onClick={() => { setSelected(c); if (c.status === 'unread') updateItem('contacts', c.id, { status: 'read' }); }}>
                <div className="admin-message-name">{c.name} {c.status === 'unread' && <span className="admin-unread-dot"></span>}</div>
                <div className="admin-message-subject">{c.subject}</div>
                <div className="admin-message-preview">{c.message?.slice(0, 50)}...</div>
              </div>
            ))}
          </div>
          <div className="admin-message-detail">
            {selected ? (
              <>
                <div className="admin-message-detail-header">
                  <h3>{selected.subject}</h3>
                  <button className="admin-delete-btn" onClick={() => { deleteItem('contacts', selected.id); setSelected(null); }}>Delete</button>
                </div>
                <div className="admin-message-meta-row">
                  <span><strong>From:</strong> {selected.name} ({selected.email})</span>
                  {selected.company && <span><strong>Company:</strong> {selected.company}</span>}
                </div>
                <div className="admin-message-body">{selected.message}</div>
              </>
            ) : (
              <div className="admin-empty-state"><p>Select a message to view</p></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsManager;
