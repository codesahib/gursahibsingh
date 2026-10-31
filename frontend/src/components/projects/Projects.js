import React from 'react';
import { Link } from 'react-router-dom';
import SelectedWork from '../portfolio/SelectedWork';
import usePageTitle from '../common/usePageTitle';
import { projectData } from './projectData';

export default function Projects() {
  usePageTitle('Selected work | Gursahib Singh');
  return <main id="main" className="collection-page">
    <SelectedWork />
    <section className="archive-projects" aria-labelledby="archive-heading">
      <p className="eyebrow">From the archive</p><h2 id="archive-heading">More things I’ve worked on.</h2>
      {projectData.map(category => <div key={category.category}>
        <h3>{category.category}</h3>
        {category.projects.map(project => <article className="archive-card" key={project.title}>
          <h4>{project.title}</h4><span className="project-meta">{project.subtitle}</span><p>{project.objective}</p>
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo ↗</a>}
          {project.link && (project.link.startsWith('https://') ? <a href={project.link} target="_blank" rel="noopener noreferrer">Visit ↗</a> : <Link to={project.link}>Visit ↗</Link>)}
        </article>)}
      </div>)}
    </section>
  </main>;
}
