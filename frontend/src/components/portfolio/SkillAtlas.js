import React, { useRef, useState } from 'react';
import SectionLink from '../common/SectionLink';
import { skillRoutes } from './skillRoutes';
import './SkillAtlas.css';

const routes = [
  { key:'languages', label:'Languages', hint:'express', path:'M300 250 H240 Q220 250 220 230 V150 Q220 115 190 115 H85' },
  { key:'web', label:'Web', hint:'interact', path:'M300 250 H355 Q380 250 380 225 V150 Q380 115 415 115 H515' },
  { key:'data', label:'Databases', hint:'structure', path:'M300 250 H70' },
  { key:'ai', label:'AI', hint:'explore', path:'M300 250 H530' },
  { key:'engineering', label:'Engineering', hint:'reason', path:'M300 250 H240 Q220 250 220 280 V350 Q220 380 190 380 H85' },
  { key:'tools', label:'Tools', hint:'connect', path:'M300 250 H355 Q380 250 380 280 V350 Q380 380 415 380 H515' }
];

export default function SkillAtlas() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef([]);
  const active = routes[selected];
  const content = skillRoutes[active.key];
  const color = { '--route': `var(--route-${active.key})` };
  function navigate(event, index) {
    const keys = { ArrowRight:(index + 1) % routes.length, ArrowDown:(index + 1) % routes.length, ArrowLeft:(index + routes.length - 1) % routes.length, ArrowUp:(index + routes.length - 1) % routes.length, Home:0, End:routes.length - 1 };
    if (keys[event.key] !== undefined) {
      event.preventDefault();
      setSelected(keys[event.key]);
      buttons.current[keys[event.key]].focus();
    }
  }
  return <section className="competency" id="skills" aria-labelledby="skills-heading">
    <div className="competency-heading"><div><p className="eyebrow">01 / My engineering atlas</p><h2 id="skills-heading">Follow the connections<span className="blue">.</span></h2></div><p>Different tools, different problems. Here’s how the things I know connect to the things I’ve built.</p></div>
    <div className="atlas">
      <div className="atlas-map" role="tablist" aria-label="Explore six areas of technical competency">
        <svg viewBox="0 0 600 470" preserveAspectRatio="none" aria-hidden="true">
          {routes.map((route,index) => <path key={route.key} className={`track${index === selected ? ' active' : ''}`} style={{ '--route':`var(--route-${route.key})` }} d={route.path} />)}
          <path className="journey" d={active.path} style={color} />
        </svg>
        {routes.map((route,index) => <button key={route.key} ref={element => { buttons.current[index] = element; }} className="route" type="button" id={`route-${route.key}`} data-route={route.key} role="tab" aria-selected={index === selected} aria-controls="atlas-panel" tabIndex={index === selected ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => navigate(event,index)}><span>{route.label}</span><small>{String(index + 1).padStart(2,'0')} / {route.hint}</small></button>)}
        <div className="atlas-hub" aria-hidden="true"><b>Curiosity.</b><span>the common<br />thread</span></div>
        <span className="atlas-key" aria-hidden="true">pick a route. see where it leads. ↗</span>
      </div>
      <div className="atlas-panel" id="atlas-panel" role="tabpanel" aria-labelledby={`route-${active.key}`} tabIndex="0" aria-live="polite" style={color}>
        <p className="eyebrow" id="atlas-route-label">Route {String(selected + 1).padStart(2,'0')} / {active.label}</p><h3 id="atlas-title">{content.title}</h3>
        <p className="atlas-description">{content.description}</p>
        <ul className="atlas-skills" aria-label="Skills in this area">{content.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        <div className="atlas-proof"><span className="mono">Where I’ve put it to work</span><p>{content.proof}</p><SectionLink section={content.link.slice(1)}>{content.linkText} ↗</SectionLink></div>
      </div>
    </div>
    <p className="atlas-index"><span>6 routes · one evolving toolkit</span><span>Explore with a click, or focus a route and use arrow keys.</span></p>
  </section>;
}
