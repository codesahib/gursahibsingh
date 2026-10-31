import React, { useState } from 'react';
import SectionLink from '../common/SectionLink';
const thoughts = { idea:'☑ start with a question worth asking.', build:'☑ turn ideas into real things.', learn:'☑ stay curious. then do it again.' };
export default function Banner() { const [thought, setThought] = useState('build'); return (<><section className="hero" aria-labelledby="name">
        <div className="hero-intro">
          <p className="hand-intro">Hey, I’m</p>
          <h1 id="name"><span>Gursahib</span><span>Singh<i>.</i></span></h1>
          <p className="intro">Software engineer in Waterloo, Canada. Curious about how things work. Always up for making something useful.</p>
          <div className="actions"><SectionLink className="primary" section="work">Things I’ve built <span aria-hidden="true">↗</span></SectionLink><SectionLink className="text-link" section="about">A little about me ↓</SectionLink></div>
        </div>
        <div className="desk" aria-label="An interactive peek into how I think">
          <span className="annotation desk-caption">a peek inside<br />my head</span>
          <svg className="caption-arrow" viewBox="0 0 80 60" fill="none" aria-hidden="true"><path d="M4 5 Q62 -4 65 44 M55 36 L65 47 L75 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div className="notebook">
            <p className="notebook-label">a work in progress. always.</p>
            <p id="thought-note" aria-live="polite">{thoughts[thought]}</p>
            <div className="thoughts" role="group" aria-label="Explore my approach">
              <button type="button" aria-pressed={thought === 'idea'} onClick={() => setThought('idea')}>idea</button><span className="thought-arrow" aria-hidden="true">→</span>
              <button type="button" aria-pressed={thought === 'build'} onClick={() => setThought('build')}>build</button><span className="thought-arrow" aria-hidden="true">→</span>
              <button type="button" aria-pressed={thought === 'learn'} onClick={() => setThought('learn')}>learn</button>
            </div>
            <svg className="loop" viewBox="0 0 260 35" fill="none" aria-hidden="true"><path d="M241 4 C241 38 22 38 22 5 M15 13 L22 4 L30 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </div>
          <span className="desk-hint">↑ try the scribbles</span>
        </div>
      </section><div className="hero-bottom"><SectionLink className="scroll-note" section="skills">Scroll for the good stuff ↓</SectionLink></div></>); }
