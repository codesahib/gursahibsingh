import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionLink from '../common/SectionLink';
import usePageTitle from '../common/usePageTitle';
import PageNotFound from '../common/PageNotFound';
import { engineeringProjects } from './engineeringProjects';
import './ProjectCaseStudy.css';

function CaseStudy({ project }) {
  usePageTitle(`${project.title} | Gursahib Singh`);
  const [selected, setSelected] = useState(1);
  const shot = project.screenshots[selected];
  const source = `${project.repository}/blob/${project.revision}`;
  const sections = [['workflow', 'The original workflow'], ['design', 'What I changed'], ['results', 'Measured results'], ['process', 'AI in the engineering'], ['limits', 'Tradeoffs & handoff']];

  return <main id="main" className="case-page">
    <header className="case-header">
      <p className="eyebrow">Engineering lab {project.number} / {project.discipline}</p>
      <h1>{project.title}<span aria-hidden="true">.</span></h1>
      <p className="case-tagline">{project.tagline}</p>
      <p className="case-intro">{project.intro}</p>
      <ul className="case-stack" aria-label="Technology stack">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="case-header-footer"><span className="mono">Personal project · Synthetic data</span><span className="case-handwritten">Make the failure reproducible.</span></div>
    </header>

    <section className="case-gallery" aria-labelledby="screens-heading">
      <div className="case-gallery-heading"><h2 id="screens-heading">Inside the app.</h2><div className="case-screen-controls" role="group" aria-label="Screenshot view">
        {project.screenshots.map((image, index) => <button key={image.label} type="button" aria-pressed={selected === index} aria-controls="case-screenshot" onClick={() => setSelected(index)}>{image.label}</button>)}
      </div></div>
      <figure id="case-screenshot" className="case-figure">
        <a className="case-image-window" href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${project.title} ${shot.label.toLowerCase()} screenshot`}>
          <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} decoding="async" />
          <span className="case-image-enlarge" aria-hidden="true">Full screenshot ↗</span>
        </a>
        <figcaption aria-live="polite"><strong>{shot.label}.</strong> {shot.caption}</figcaption>
      </figure>
      <p className="case-image-note">{project.screenshotNote}</p>
    </section>

    <div className="case-body-layout">
      <aside className="case-sidebar"><nav aria-label="Case study sections">{sections.map(([id, label], index) => <Link key={id} to={{ pathname: `/projects/${project.slug}`, hash: `#case-${id}` }}><span>0{index + 1}</span>{label}</Link>)}</nav><p className="mono">React interface.<br />Python service.<br />Reproducible evidence.</p></aside>
      <article className="case-story">
        <section id="case-workflow"><p className="eyebrow">01 / The starting point</p><h2>The ordinary workflow.<br />And where it breaks.</h2><p>{project.baseline}</p><p>{project.diagnosis}</p></section>
        <section id="case-design"><p className="eyebrow">02 / The engineering</p><h2>A smaller, safer path.</h2><ol className="case-flow" aria-label="Improved workflow">{project.flow.map(step => <li key={step}>{step}</li>)}</ol><div className="case-decisions">{project.design.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
        <section id="case-results"><p className="eyebrow">03 / Measured, not assumed</p><h2>Same inputs.<br />A different outcome.</h2><div className="case-table-wrap"><table className="case-results-table"><caption>Synthetic before/after comparison</caption><thead><tr><th scope="col">Measure</th><th scope="col">Before</th><th scope="col">After</th></tr></thead><tbody>{project.metrics.map(([label, before, after]) => <tr key={label}><th scope="row">{label}</th><td>{before}</td><td>{after}</td></tr>)}</tbody></table></div><p>{project.methodology}</p><p className="case-checks">{project.checks}</p><a className="case-inline-link" href={`${source}/${project.evidence}`} target="_blank" rel="noopener noreferrer">Inspect the benchmark evidence ↗</a></section>
        <section id="case-process"><p className="eyebrow">04 / AI-assisted engineering</p><h2>The tool behind the work.</h2><p>{project.ai}</p><p className="case-scope-note">These results measure synthetic workflow correctness. Human engineering time, a human-only comparator, and causal AI productivity gains were not measured. Review and regressions were Codex-assisted; no independent human audit is claimed.</p></section>
        <section id="case-limits"><p className="eyebrow">05 / What I would carry forward</p><h2>Keep the boundary visible.</h2><p>{project.tradeoff}</p><p>Verification ran on Windows with installed Chrome. Linux, production deployment, and performance at scale are outside the verified results.</p><div className="case-source-links"><a href={project.repository} target="_blank" rel="noopener noreferrer">Repository ↗</a><a href={`${source}/${project.verification}`} target="_blank" rel="noopener noreferrer">Verification record ↗</a></div><p className="case-source-note">The repository is private. <SectionLink section="contact">Get in touch for source access.</SectionLink> Screenshots contain fictional data; no live customer or payment information is shown.</p></section>
      </article>
    </div>

    <section className="case-next" aria-labelledby="case-next-heading"><p className="eyebrow">Keep exploring</p><h2 id="case-next-heading">Another system. Another edge case.</h2><div>{engineeringProjects.filter(item => item.slug !== project.slug).map(item => <Link to={`/projects/${item.slug}`} key={item.slug}><span className="mono">{item.discipline}</span><strong>{item.title} <span aria-hidden="true">↗</span></strong></Link>)}</div><SectionLink section="work" className="case-back">← Back to selected work</SectionLink></section>
  </main>;
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = engineeringProjects.find(item => item.slug === slug);
  return project ? <CaseStudy project={project} key={project.slug} /> : <PageNotFound />;
}
