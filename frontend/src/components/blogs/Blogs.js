import React from 'react';
import BlogTeaser from '../portfolio/BlogTeaser';
import usePageTitle from '../common/usePageTitle';

export default function Blogs() {
  usePageTitle('Notes | Gursahib Singh');
  return <main id="main" className="collection-page"><BlogTeaser /></main>;
}
