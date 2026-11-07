import React from 'react';
import { Link } from 'react-router-dom';
import { engineeringProjects } from './engineeringProjects';
import './ProjectCaseStudy.css';

export default function EngineeringWork() {
  return <section className="engineering-work" aria-label="Engineering case studies">
    <p className="mono engineering-label">Recent engineering labs</p>
    <p className="engineering-intro">Three small systems. The work behind making them dependable.</p>
    <div className="case-summaries">
      {engineeringProjects.map(project => <Link className="case-summary" to={`/projects/${project.slug}`} key={project.slug}>
        <div className="case-summary-image"><img src={project.screenshots[1].src} alt={project.screenshots[1].alt} width={project.screenshots[1].width} height={project.screenshots[1].height} loading="lazy" decoding="async" /></div>
        <div className="case-summary-copy">
          <span className="mono">{project.number} / {project.discipline}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <strong className="case-summary-result">{project.highlight}</strong>
          <span className="case-summary-link">Read the case study <span aria-hidden="true">↗</span></span>
        </div>
      </Link>)}
    </div>
    <p className="engineering-note">Independent synthetic projects. AI-assisted engineering; deterministic applications.</p>
  </section>;
}
