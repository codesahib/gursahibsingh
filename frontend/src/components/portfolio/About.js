import React from 'react';
import SectionLink from '../common/SectionLink';
import resume from '../../static/media/Resume_GursahibSingh.pdf';
export default function About() { return (<section className="about" id="about" aria-labelledby="about-heading">
        <div><p className="eyebrow">03 / A little about me</p><h2 id="about-heading">The longer<br />hello<span className="blue">.</span></h2><a className="text-link" href={resume} target="_blank" rel="noopener noreferrer">Read my résumé ↗</a></div>
        <div className="about-copy">
          <p>I’m Gursahib, a software engineer based in Waterloo. My work has taken me through connected buildings, construction technology, e-commerce, EdTech, and chip-design software.</p>
          <p>I work across the stack: interfaces people use, APIs behind them, and the systems keeping everything connected. Lately, that also means putting AI to work in development and product workflows.</p>
          <p>I studied Electrical &amp; Computer Engineering at the University of Waterloo. Away from work, this corner of the internet holds a few <SectionLink section="notes">travel notes</SectionLink>, too.</p>
          <div className="career" aria-label="Selected experience">
            <div className="career-row"><time>2025 — now</time><div><strong>Brickeye</strong><span>Full-stack Developer</span></div></div>
            <div className="career-row"><time>2023 — 25</time><div><strong>Siemens Canada</strong><span>Software Developer</span></div></div>
            <div className="career-row"><time>2023</time><div><strong>ShyftLabs</strong><span>Software Developer</span></div></div>
            <div className="career-row"><time>2022 — 23</time><div><strong>Bluekey AI</strong><span>Full Stack Developer</span></div></div>
            <div className="career-row"><time>2019 — 21</time><div><strong>Siemens EDA</strong><span>Senior Member Technical Staff</span></div></div>
          </div>
        </div>
      </section>); }
