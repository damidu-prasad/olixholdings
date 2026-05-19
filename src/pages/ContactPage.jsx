import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const ContactPage = () => {
  const { addContact } = useData();
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
    setSubmitted(true);
  };

  return (
    <div className="page-contact">
      <section className="page-hero">
        <div className="hero-glow"></div>
        <h1 className="page-hero-title">Contact Us</h1>
        <p className="page-hero-sub">Have a question or want to discuss a project? We'd love to hear from you.</p>
      </section>
      <section className="section contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-info-desc">Reach out to us through any of these channels and our team will respond within 24 hours.</p>
          <div className="contact-channels">
            <div className="contact-channel glass"><span className="contact-channel-icon">📧</span><div><h4>Email</h4><p>info@olixholdings.com</p></div></div>
            <div className="contact-channel glass"><span className="contact-channel-icon">📍</span><div><h4>Headquarters</h4><p>Global — Fully Remote</p></div></div>
            <div className="contact-channel glass"><span className="contact-channel-icon">🕐</span><div><h4>Response Time</h4><p>Within 24 hours</p></div></div>
            <div className="contact-channel glass"><span className="contact-channel-icon">💬</span><div><h4>Live Chat</h4><p>Try our AI assistant (bottom-right)</p></div></div>
          </div>
        </div>
        <div className="contact-form-wrapper glass">
          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button className="cta-button" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', subject: '', message: '' }); }}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="form-title">Send us a Message</h3>
              <div className="form-row">
                <div className="form-group"><label>Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" /></div>
                <div className="form-group"><label>Email *</label><input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Company</label><input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company" /></div>
                <div className="form-group"><label>Subject *</label><input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" /></div>
              </div>
              <div className="form-group"><label>Message *</label><textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project..."></textarea></div>
              <button type="submit" className="cta-button cta-large" style={{ width: '100%' }}>Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
