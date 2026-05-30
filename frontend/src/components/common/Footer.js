import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-main">
        <h2 className="footer-heading">Contact</h2>
        <div className="footer-links">
          <a href="mailto:iamgursahib@gmail.com" className="footer-email">
            iamgursahib@gmail.com
          </a>
          <div className="footer-social">
            <a href="https://linkedin.com/in/singh-gursahib" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/codesahib" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://codesahib.com" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright 2026 | <Link to="/">codesahib.com</Link>
        </p>
      </div>
    </footer>
  );
}
