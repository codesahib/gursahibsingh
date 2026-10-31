import React from 'react';
import Banner from './Banner';
import SkillAtlas from '../portfolio/SkillAtlas';
import SelectedWork from '../portfolio/SelectedWork';
import About from '../portfolio/About';
import BlogTeaser from '../portfolio/BlogTeaser';
import Contact from '../portfolio/Contact';
import usePageTitle from '../common/usePageTitle';

export default function Home() {
  usePageTitle('Gursahib Singh | Software Engineer');
  return <main id="main"><Banner /><SkillAtlas /><SelectedWork /><About /><BlogTeaser /><Contact /></main>;
}
