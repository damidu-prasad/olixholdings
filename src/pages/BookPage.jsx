import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const timeSlots = ['09:00 AM','10:00 AM','11:00 AM','01:00 PM','02:00 PM','03:00 PM','04:00 PM'];

const BookPage = () => {
  const { addBooking } = useData();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-book">
        <section className="page-hero"><div className="hero-glow"></div><h1 className="page-hero-title">Booking Confirmed! 🎉</h1><p className="page-hero-sub">We'll send a calendar invite to {form.email}</p></section>
        <section className="section">
          <div className="booking-confirm glass" style={{ maxWidth: 600, margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✓</div>
            <h2>Your consultation is scheduled</h2>
            <div className="booking-details"><p><strong>Date:</strong> {form.date}</p><p><strong>Time:</strong> {form.time}</p><p><strong>Service:</strong> {form.service}</p></div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem' }}>A member of our team will reach out before the call.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-book">
      <section className="page-hero"><div className="hero-glow"></div><h1 className="page-hero-title">Book a Consultation</h1><p className="page-hero-sub">Schedule a free 30-minute automation audit with our experts</p></section>
      <section className="section">
        <div className="booking-container">
          <div className="step-indicators">
            {['Your Info','Service','Schedule'].map((label, i) => (
              <div key={i} className={`step-dot ${step >= i+1 ? 'step-active' : ''}`}><span className="step-number">{i+1}</span><span className="step-label">{label}</span></div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="booking-form glass">
            {step === 1 && (
              <div className="booking-step">
                <h3>Tell us about yourself</h3>
                <div className="form-row"><div className="form-group"><label>Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" /></div><div className="form-group"><label>Email *</label><input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" /></div></div>
                <div className="form-row"><div className="form-group"><label>Company</label><input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company" /></div><div className="form-group"><label>Phone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" /></div></div>
                <button type="button" className="cta-button cta-large" style={{ width: '100%' }} onClick={() => { if (form.name && form.email) setStep(2); }}>Next Step →</button>
              </div>
            )}
            {step === 2 && (
              <div className="booking-step">
                <h3>What are you looking for?</h3>
                <div className="service-select-grid">
                  {['Workflow Automation','Custom AI Agents','System Integration','AI Product Engineering','Customer Service AI','Finance Automation','General Consultation'].map(s => (
                    <button type="button" key={s} className={`service-select-btn ${form.service === s ? 'service-select-active' : ''}`} onClick={() => setForm({ ...form, service: s })}>{s}</button>
                  ))}
                </div>
                <div className="form-group"><label>Additional Notes</label><textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Briefly describe your needs..."></textarea></div>
                <div className="booking-nav"><button type="button" className="cta-secondary" onClick={() => setStep(1)}>← Back</button><button type="button" className="cta-button" onClick={() => { if (form.service) setStep(3); }}>Next Step →</button></div>
              </div>
            )}
            {step === 3 && (
              <div className="booking-step">
                <h3>Pick a Date & Time</h3>
                <div className="form-row"><div className="form-group"><label>Preferred Date *</label><input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} /></div></div>
                <div className="time-slots-grid">{timeSlots.map(t => (<button type="button" key={t} className={`time-slot ${form.time === t ? 'time-slot-active' : ''}`} onClick={() => setForm({ ...form, time: t })}>{t}</button>))}</div>
                <div className="booking-nav"><button type="button" className="cta-secondary" onClick={() => setStep(2)}>← Back</button><button type="submit" className="cta-button" disabled={!form.date || !form.time}>Confirm Booking ✓</button></div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
