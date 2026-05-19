import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Olix AutoFlow',
    tag: 'Workflow Engine',
    desc: 'Our flagship workflow automation platform. Design, deploy, and monitor complex multi-step automations with a visual drag-and-drop builder. Zero code required.',
    features: ['Visual workflow builder', 'Conditional branching', '200+ integrations', 'Real-time analytics'],
    color: '#6366f1',
  },
  {
    name: 'Olix AgentX',
    tag: 'AI Agent Platform',
    desc: 'Build and deploy custom AI agents powered by the latest LLMs. Train them on your data, deploy across channels, and let them handle complex business tasks autonomously.',
    features: ['Custom LLM training', 'Multi-channel deployment', 'Knowledge base integration', 'Conversation analytics'],
    color: '#06b6d4',
  },
  {
    name: 'Olix SyncHub',
    tag: 'Integration Platform',
    desc: 'Connect all your systems with real-time bidirectional syncing. Eliminate data silos and ensure every platform has accurate, up-to-date information.',
    features: ['Real-time syncing', 'Data transformation', 'Error handling & retries', 'Audit logging'],
    color: '#8b5cf6',
  },
  {
    name: 'Olix InsightEngine',
    tag: 'Analytics Suite',
    desc: 'AI-powered analytics that automatically surface insights, generate reports, and predict trends. Turn your raw data into actionable intelligence.',
    features: ['Auto-generated reports', 'Predictive analytics', 'Custom dashboards', 'Natural language queries'],
    color: '#10b981',
  },
];

const ProductsPage = () => {
  return (
    <div className="page-products">
      <section className="page-hero">
        <div className="hero-glow"></div>
        <h1 className="page-hero-title">Our Products</h1>
        <p className="page-hero-sub">Enterprise-grade AI tools built to automate, integrate, and scale</p>
      </section>

      <section className="section">
        <div className="products-grid">
          {products.map((p, i) => (
            <div key={i} className="product-card glass">
              <div className="product-tag" style={{ background: p.color }}>{p.tag}</div>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-desc">{p.desc}</p>
              <ul className="product-features">
                {p.features.map((f, j) => (
                  <li key={j}><span style={{ color: p.color }}>▸</span> {f}</li>
                ))}
              </ul>
              <Link to="/book" className="product-cta" style={{ borderColor: p.color, color: p.color }}>
                Request Demo →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section ai-demo-section">
        <div className="ai-demo-card glass">
          <div className="ai-demo-icon">🤖</div>
          <h2>Try Our AI Assistant</h2>
          <p>Experience the power of Olix AI firsthand. Our assistant is available right now in the bottom-right corner of your screen. Click the robot icon to start a conversation!</p>
          <div className="ai-demo-features">
            <div className="ai-demo-feature">
              <span>💬</span>
              <span>Natural Conversations</span>
            </div>
            <div className="ai-demo-feature">
              <span>⚡</span>
              <span>Instant Responses</span>
            </div>
            <div className="ai-demo-feature">
              <span>🎯</span>
              <span>Context-Aware</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
