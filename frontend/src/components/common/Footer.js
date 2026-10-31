import React from 'react';
import SectionLink from './SectionLink';
import { ThemeToggle } from './Theme';

export default function Footer() {
  return <footer>
    <span>Gursahib Singh © {new Date().getFullYear()}</span>
    <div className="footer-links">
      <a href="https://github.com/codesahib" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <a href="https://www.linkedin.com/in/singh-gursahib" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <ThemeToggle /><SectionLink>Back to top ↑</SectionLink>
    </div>
  </footer>;
}
