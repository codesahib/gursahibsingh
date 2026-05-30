import React, { useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

import './SkillConstellation.css';

const domainColors = {
  AI: '#2563eb',
  Web: '#0f766e',
  Languages: '#b45309',
  Databases: '#7c3aed',
  Tools: '#475569'
};

const graphData = {
  nodes: [
    { id: 'AI', type: 'domain', domain: 'AI' },
    { id: 'Web', type: 'domain', domain: 'Web' },
    { id: 'Languages', type: 'domain', domain: 'Languages' },
    { id: 'Databases', type: 'domain', domain: 'Databases' },
    { id: 'Tools', type: 'domain', domain: 'Tools' },

    { id: 'LLM Apps', type: 'skill', domain: 'AI' },
    { id: 'Agentic Workflows', type: 'skill', domain: 'AI' },
    { id: 'Prompt Engineering', type: 'skill', domain: 'AI' },

    { id: 'React', type: 'skill', domain: 'Web' },
    { id: 'Node.js', type: 'skill', domain: 'Web' },
    { id: 'FastAPI', type: 'skill', domain: 'Web' },
    { id: 'GraphQL', type: 'skill', domain: 'Web' },

    { id: 'Python', type: 'skill', domain: 'Languages' },
    { id: 'TypeScript', type: 'skill', domain: 'Languages' },
    { id: 'JavaScript', type: 'skill', domain: 'Languages' },

    { id: 'PostgreSQL', type: 'skill', domain: 'Databases' },
    { id: 'MongoDB', type: 'skill', domain: 'Databases' },
    { id: 'MySQL', type: 'skill', domain: 'Databases' },

    { id: 'Kafka', type: 'skill', domain: 'Tools' },
    { id: 'Docker', type: 'skill', domain: 'Tools' },
    { id: 'GCP', type: 'skill', domain: 'Tools' },
    { id: 'Kubernetes', type: 'skill', domain: 'Tools' },
    { id: 'Git', type: 'skill', domain: 'Tools' },
    { id: 'Playwright', type: 'skill', domain: 'Tools' }
  ],
  links: [
    { source: 'AI', target: 'LLM Apps', weight: 2 },
    { source: 'AI', target: 'Agentic Workflows', weight: 2 },
    { source: 'AI', target: 'Prompt Engineering', weight: 2 },
    { source: 'Web', target: 'React', weight: 2 },
    { source: 'Web', target: 'Node.js', weight: 2 },
    { source: 'Web', target: 'FastAPI', weight: 2 },
    { source: 'Web', target: 'GraphQL', weight: 2 },
    { source: 'Languages', target: 'Python', weight: 2 },
    { source: 'Languages', target: 'TypeScript', weight: 2 },
    { source: 'Languages', target: 'JavaScript', weight: 2 },
    { source: 'Databases', target: 'PostgreSQL', weight: 2 },
    { source: 'Databases', target: 'MongoDB', weight: 2 },
    { source: 'Databases', target: 'MySQL', weight: 2 },
    { source: 'Tools', target: 'Kafka', weight: 2 },
    { source: 'Tools', target: 'Docker', weight: 2 },
    { source: 'Tools', target: 'GCP', weight: 2 },
    { source: 'Tools', target: 'Kubernetes', weight: 2 },
    { source: 'Tools', target: 'Git', weight: 2 },
    { source: 'Tools', target: 'Playwright', weight: 2 },
    { source: 'LLM Apps', target: 'Python', weight: 3 },
    { source: 'LLM Apps', target: 'FastAPI', weight: 2 },
    { source: 'React', target: 'TypeScript', weight: 3 },
    { source: 'Node.js', target: 'PostgreSQL', weight: 3 },
    { source: 'Node.js', target: 'MongoDB', weight: 2 },
    { source: 'Kafka', target: 'GCP', weight: 2 },
    { source: 'Docker', target: 'Kubernetes', weight: 2 },
    { source: 'GraphQL', target: 'PostgreSQL', weight: 2 },
    { source: 'Playwright', target: 'React', weight: 2 }
  ]
};

export default function SkillConstellation() {
  const data = useMemo(() => graphData, []);
  const wrapRef = useRef(null);
  const rafRef = useRef(null);
  const [graphWidth, setGraphWidth] = useState(960);

  useEffect(() => {
    const measure = () => {
      if (!wrapRef.current) return;
      const nextWidth = Math.max(280, Math.floor(wrapRef.current.clientWidth));
      setGraphWidth((prev) => (prev !== nextWidth ? nextWidth : prev));
    };

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const graphHeight = graphWidth < 500 ? 340 : 460;

  return (
    <div className="skill-constellation-card">
      <div className="skill-constellation-header">
        <h3>Skill Constellation</h3>
        <p>Domains are color coded to show how skills connect across engineering areas.</p>
      </div>

      <div className="skill-constellation-graph" ref={wrapRef}>
        <ForceGraph2D
          graphData={data}
          width={graphWidth}
          height={graphHeight}
          backgroundColor="rgba(0,0,0,0)"
          cooldownTicks={120}
          nodeRelSize={6}
          linkWidth={(link) => (link.weight || 1) * 0.7}
          linkColor={() => 'rgba(71, 85, 105, 0.3)'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const isDomain = node.type === 'domain';
            const radius = isDomain ? 8 : 7;
            const color = domainColors[node.domain] || '#475569';

            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();

            const label = node.id;
            const fontSize = (isDomain ? 14 : 11) / globalScale;
            ctx.font = `${isDomain ? 700 : 500} ${fontSize}px Inter, sans-serif`;
            ctx.fillStyle = '#0f172a';
            ctx.fillText(label, node.x + radius + 2, node.y + 4 / globalScale);
          }}
        />
      </div>

      <div className="skill-constellation-footer">
        <div className="domain-legend">
          {Object.entries(domainColors).map(([domain, color]) => (
            <span key={domain} className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: color }} />
              {domain}
            </span>
          ))}
        </div>
        <p className="graph-help">Tip: Use your mouse wheel/trackpad to zoom in or out, and drag the canvas to re-center nodes.</p>
      </div>
    </div>
  );
}
