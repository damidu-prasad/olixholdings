import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <Logo size={30} variant="light" />
            <span className="footer-logo-text">OLIX HOLDINGS</span>
          </div>
          <p className="footer-tagline">Next-generation AI automation solutions for enterprises worldwide.</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/careers">Careers</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/book">Book a Call</Link>
          <a href="#industries">Industries</a>
          <a href="#reviews">Testimonials</a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="mailto:info@olixholdings.com">info@olixholdings.com</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter / X</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Olix Holdings. All rights reserved.</p>
        <p className="footer-sub">Powering the future of enterprise automation.</p>
      </div>
    </footer>
  );
};

export default Footer;
