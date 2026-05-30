import { React, useEffect } from 'react';
import Timeline from './Timeline';
import SkillConstellation from './SkillConstellation';

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
          Software Engineer with 5+ years of experience across IoT, e-commerce, EdTech,
          and EDA, building AI-native and data-driven products for enterprise and startup teams.
        </p>
        <div className="about-cards">
          <article className="about-card">
            <h3>What I Build</h3>
            <p>
              Scalable full-stack platforms, domain-driven APIs, event-driven systems,
              and LLM-powered workflows that solve real business problems.
            </p>
          </article>
          <article className="about-card">
            <h3>How I Deliver</h3>
            <p>
              I combine architecture, testing, and CI/CD discipline to improve throughput,
              reduce defects, and keep teams shipping with confidence.
            </p>
          </article>
          <article className="about-card">
            <h3>Leadership and Impact</h3>
            <p>
              STAR Award recipient at Siemens, with experience mentoring developers and
              leading high-impact initiatives from requirement to production.
            </p>
          </article>
        </div>
      </section>

      <section className="section skills-section">
        <h2 className="content-heading">Tech Skills</h2>
        <SkillConstellation />
      </section>

      <section className="section timeline-section">
        <h2 className="content-heading">Experience Timeline</h2>
        <Timeline />
      </section>
    </div>
  );
}
