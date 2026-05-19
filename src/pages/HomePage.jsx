import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const HomePage = () => {
  const { data } = useData();

  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-tagline">⚡ Next-Gen AI Operations</div>
          <h1 className="hero-title">{data.heroTitle}</h1>
          <p className="hero-description">{data.heroSubtitle}</p>
          <div className="hero-actions">
            <Link to="/book" className="cta-button cta-large">Schedule an Automation Audit</Link>
            <a href="#services" className="cta-secondary cta-large"
              onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior:'smooth'}); }}>
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        {data.stats.map(s => (
          <div key={s.id} className="stat-item">
            <div className="stat-number"><Counter end={s.value} suffix={s.suffix} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section id="industries" className="section industries-section">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">Transforming operations across diverse sectors with intelligent automation</p>
        <div className="industries-grid">
          {data.industries.map(ind => (
            <div key={ind.id} className="industry-card glass">
              <span className="industry-icon">{ind.icon}</span>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section services-section">
        <h2 className="section-title">Our Core Capabilities</h2>
        <p className="section-subtitle">End-to-end AI automation solutions engineered for scale</p>
        <div className="services-grid">
          {data.services.slice(0, 4).map(s => (
            <div key={s.id} className="service-card glass">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta"><Link to="/services" className="cta-button">View All Services →</Link></div>
      </section>

      <section id="reviews" className="section reviews-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Trusted by industry leaders across the globe</p>
        <div className="reviews-grid">
          {data.reviews.map(review => (
            <div key={review.id} className="review-card glass">
              <div className="review-stars">{'★'.repeat(review.rating)}</div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{review.name.charAt(0)}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-role">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Ready to Automate Your Operations?</h2>
          <p>Book a free consultation and discover how AI can transform your business</p>
          <div className="cta-banner-actions">
            <Link to="/book" className="cta-button cta-large">Book Free Consultation</Link>
            <Link to="/contact" className="cta-secondary cta-large">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
