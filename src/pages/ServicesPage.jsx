import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '⚙️',
    title: 'End-to-End Workflow Automation',
    desc: 'Cross-platform orchestration that maps and links disjointed technical infrastructure to execute background operations seamlessly 24/7 without manual latency.',
    features: ['Process mapping & optimization', 'Multi-platform orchestration', 'Conditional logic workflows', 'Real-time monitoring dashboards'],
  },
  {
    icon: '🧠',
    title: 'Custom AI Agents & Intelligent Solutions',
    desc: 'Tailored LLM executions deploying task-specific digital assistants capable of navigating internal data schemas, qualifying leads, and handling complex communications.',
    features: ['Custom GPT-powered agents', 'Lead qualification bots', 'Internal knowledge assistants', 'Multi-language support'],
  },
  {
    icon: '🔄',
    title: 'System Integration & Live Syncing',
    desc: 'Data pipeline integrity via low-code pipelines and custom native scripts ensuring operational data moves smoothly across systems in real time.',
    features: ['CRM & ERP integrations', 'Real-time data pipelines', 'API development & management', 'Legacy system modernization'],
  },
  {
    icon: '🚀',
    title: 'AI-Driven Product Engineering',
    desc: 'Constructing bespoke analytics software or internal portals layered with machine learning components to auto-generate reports and surface real-time KPIs.',
    features: ['Custom dashboard development', 'Predictive analytics engines', 'ML model deployment', 'Real-time KPI monitoring'],
  },
  {
    icon: '📞',
    title: 'AI Customer Service Solutions',
    desc: 'Deploy intelligent customer service agents that handle inquiries 24/7, route tickets intelligently, and provide personalized support at scale.',
    features: ['AI chat & voice agents', 'Sentiment analysis', 'Smart ticket routing', 'Customer journey analytics'],
  },
  {
    icon: '🏦',
    title: 'Finance Automation',
    desc: 'Streamline financial operations with automated compliance checks, transaction processing, risk assessment, and intelligent reporting systems.',
    features: ['Automated compliance', 'Transaction processing', 'Risk analysis AI', 'Financial report generation'],
  },
];

const ServicesPage = () => {
  return (
    <div className="page-services">
      <section className="page-hero">
        <div className="hero-glow"></div>
        <h1 className="page-hero-title">Our Services</h1>
        <p className="page-hero-sub">Comprehensive AI automation solutions tailored to transform your operations</p>
      </section>

      <section className="section">
        <div className="services-detail-grid">
          {services.map((s, i) => (
            <div key={i} className="service-detail-card glass">
              <div className="service-detail-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="service-detail-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f, j) => (
                  <li key={j}><span className="feature-check">✓</span> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-cta" style={{ marginTop: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Need a Custom Solution?</h2>
          <p className="section-subtitle">Let's discuss how we can build the perfect automation for your business</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/book" className="cta-button cta-large">Book a Consultation</Link>
            <Link to="/contact" className="cta-secondary cta-large">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
