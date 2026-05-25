import { React, useEffect } from 'react';
import Timeline from './Timeline';

import '../../static/css/style.css';
import './Home.css';

export default function Home(props) {
  useEffect(() => {
    props.show_banner(true);
    props.show_home_link(false);
  }, [props]);

  document.title = 'Home | Gursahib Singh';

  return (
    <div className="homeComponent">
      <section className="section home-intro-section">
        <h2 className="content-heading">About</h2>
        <p className="home-summary">
          Software Engineer focused on building reliable products with clean APIs,
          practical architecture, and strong delivery habits.
        </p>
        <div className="about-cards">
          <article className="about-card">
            <h3>What I Build</h3>
            <p>
              Full-stack web applications and backend services with emphasis on
              performance, maintainability, and clear user value.
            </p>
          </article>
          <article className="about-card">
            <h3>How I Work</h3>
            <p>
              I prefer simple designs, thoughtful trade-offs, testable code, and
              collaborative execution from planning to production.
            </p>
          </article>
          <article className="about-card">
            <h3>Where I Add Value</h3>
            <p>
              Turning ambiguous requirements into shippable software while keeping
              code quality and product experience balanced.
            </p>
          </article>
        </div>
      </section>

      <section className="section timeline-section">
        <h2 className="content-heading">Experience Timeline</h2>
        <Timeline />
      </section>
    </div>
  );
}
