import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const values = [
  { icon: '🚀', title: 'Innovation First', desc: 'We push boundaries and embrace cutting-edge technology to deliver exceptional results.' },
  { icon: '🤝', title: 'Collaboration', desc: 'We believe the best solutions come from diverse minds working together.' },
  { icon: '📈', title: 'Growth Mindset', desc: 'Continuous learning and development are at the core of our culture.' },
  { icon: '🌍', title: 'Global Impact', desc: 'We build solutions that transform businesses and industries worldwide.' },
];

const CareersPage = () => {
  const { data } = useData();
  const [filter, setFilter] = useState('All');

  const activeJobs = data.jobs.filter(job => job.active);
  const depts = ['All', ...new Set(activeJobs.map(o => o.dept))];
  const filtered = filter === 'All' ? activeJobs : activeJobs.filter(o => o.dept === filter);

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

        {activeJobs.length === 0 ? (
          <div className="glass" style={{ textAlign: 'center', padding: '4rem 2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
            <h3 style={{ marginBottom: '0.5rem' }}>No open positions right now</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We're not actively hiring at the moment, but we're always looking for great talent. Feel free to send your resume to olixholdings@gmail.com.</p>
          </div>
        ) : (
          <>
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
                    <button className="cta-button" onClick={() => alert('Application form coming soon! Please email olixholdings@gmail.com')}>Apply Now</button>
                  </div>
                  <p className="job-desc">{job.desc}</p>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                No open positions found for {filter}.
              </div>
            )}
          </>
        )}
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
