import React from 'react';
import SectionLink from './SectionLink';
import usePageTitle from './usePageTitle';

export default function PageNotFound() {
  usePageTitle('Page not found | Gursahib Singh');
  return <main id="main" className="not-found"><p className="eyebrow">404 / A wrong turn</p><h1>Nothing here. Yet.</h1><SectionLink className="text-link">Back to home ↗</SectionLink></main>;
}
