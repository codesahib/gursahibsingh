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
            <a href="https://www.linkedin.com/in/gursahib-singh-04849b156/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/codesahib" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright 2026 • <Link to="/">gursahibsingh</Link>
        </p>
      </div>
    </footer>
  );
}
