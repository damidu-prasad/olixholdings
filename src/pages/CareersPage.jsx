import React, { useState } from 'react';

const openings = [
  { title: 'Senior AI Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time',
    desc: 'Design and implement cutting-edge AI solutions. Work with LLMs, ML pipelines, and custom model training to deliver enterprise automation products.' },
  { title: 'Full Stack Developer', dept: 'Engineering', location: 'Remote', type: 'Full-time',
    desc: 'Build and maintain our web platforms and internal tools. Experience with React, Node.js, and cloud infrastructure required.' },
  { title: 'AI Sales Consultant', dept: 'Sales', location: 'Remote', type: 'Full-time',
    desc: 'Drive revenue by consulting with enterprise clients on AI automation opportunities. Deep understanding of AI/ML concepts and business operations needed.' },
  { title: 'Automation Architect', dept: 'Operations', location: 'Remote', type: 'Full-time',
    desc: 'Design and architect complex workflow automations for enterprise clients. Experience with integration platforms and API design required.' },
  { title: 'UX/UI Designer', dept: 'Design', location: 'Remote', type: 'Full-time',
    desc: 'Create stunning, intuitive interfaces for our products and client projects. Strong portfolio in SaaS/enterprise design required.' },
  { title: 'Marketing Manager', dept: 'Marketing', location: 'Remote', type: 'Full-time',
    desc: 'Lead our content strategy, SEO, and demand generation efforts. Experience in B2B tech marketing with a data-driven approach.' },
];

const values = [
  { icon: '🚀', title: 'Innovation First', desc: 'We push boundaries and embrace cutting-edge technology to deliver exceptional results.' },
  { icon: '🤝', title: 'Collaboration', desc: 'We believe the best solutions come from diverse minds working together.' },
  { icon: '📈', title: 'Growth Mindset', desc: 'Continuous learning and development are at the core of our culture.' },
  { icon: '🌍', title: 'Global Impact', desc: 'We build solutions that transform businesses and industries worldwide.' },
];

const CareersPage = () => {
  const [filter, setFilter] = useState('All');
  const depts = ['All', ...new Set(openings.map(o => o.dept))];
  const filtered = filter === 'All' ? openings : openings.filter(o => o.dept === filter);

  return (
    <div className="page-careers">
      <section className="page-hero">
        <div className="hero-glow"></div>
        <h1 className="page-hero-title">Join Our Team</h1>
        <p className="page-hero-sub">Build the future of AI automation with a world-class team</p>
      </section>

      <section className="section">
        <h2 className="section-title">Why Olix Holdings?</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card glass">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Open Positions</h2>
        <div className="dept-filters">
          {depts.map(d => (
            <button key={d} className={`dept-filter ${filter === d ? 'dept-filter-active' : ''}`} onClick={() => setFilter(d)}>
              {d}
            </button>
          ))}
        </div>
        <div className="jobs-list">
          {filtered.map((job, i) => (
            <div key={i} className="job-card glass">
              <div className="job-header">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-badge">{job.dept}</span>
                    <span className="job-badge">{job.location}</span>
                    <span className="job-badge">{job.type}</span>
                  </div>
                </div>
                <button className="cta-button" onClick={() => alert('Application form coming soon! Please email careers@olixholdings.com')}>Apply Now</button>
              </div>
              <p className="job-desc">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section perks-section">
        <h2 className="section-title">Benefits & Perks</h2>
        <div className="perks-grid">
          {[
            { icon: '🏠', title: 'Remote First', desc: 'Work from anywhere in the world' },
            { icon: '💰', title: 'Competitive Pay', desc: 'Top-tier compensation packages' },
            { icon: '📚', title: 'Learning Budget', desc: '$2,000/year for courses & conferences' },
            { icon: '🏖️', title: 'Unlimited PTO', desc: 'Take the time you need to recharge' },
            { icon: '💻', title: 'Equipment Stipend', desc: 'Premium setup for your workspace' },
            { icon: '🎯', title: 'Equity Options', desc: 'Share in our success and growth' },
          ].map((p, i) => (
            <div key={i} className="perk-item glass">
              <span className="perk-icon">{p.icon}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
