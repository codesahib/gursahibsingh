import React from 'react';
import { useLocation } from 'react-router-dom';
import SectionLink from './SectionLink';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <header className={`site-header${isHome ? '' : ' has-back'}`}>
      {!isHome && <SectionLink section={pathname.startsWith('/blogs') ? 'notes' : 'work'} className="header-back">← Back to {pathname.startsWith('/blogs') ? 'notes' : 'home'}</SectionLink>}
      <nav aria-label="Main navigation">
        <SectionLink section="skills">skills</SectionLink><SectionLink section="work">work</SectionLink>
        <SectionLink section="about">about</SectionLink><SectionLink section="notes">notes</SectionLink>
        <SectionLink className="hello" section="contact">say hello ↗</SectionLink>
      </nav>
    </header>
  );
}
