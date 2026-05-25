import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectData = [
  {
    category: 'AI / ML',
    projects: [
      {
        title: 'AI-Powered IoT Alert Analysis (PoC)',
        subtitle: 'Python, LangChain, LLMs, IoT Logs',
        objective:
          'Automated anomaly summaries and root-cause guidance to reduce manual triage effort.',
      },
      {
        title: 'Talk-to-My-CSV',
        subtitle: 'Streamlit, LangChain, Ollama, Chroma',
        objective:
          'Natural language querying over CSV data for faster, code-free analysis.',
      },
    ],
  },
  {
    category: 'Software Engineering',
    projects: [
      {
        title: 'Smart Lighting for Microsoft (Corporate)',
        subtitle: 'Python, MQTT, Docker',
        objective:
          'Contributed to a large-scale lighting control platform handling real-time sensor streams.',
      },
      {
        title: 'IoT Middleware for Google (Corporate)',
        subtitle: 'Java, Python, GCP, MQTT, REST',
        objective:
          'Built middleware to route sensor data reliably between enterprise IoT systems.',
      },
    ],
  },
  {
    category: 'Full Stack Applications',
    projects: [
      {
        title: 'Dynamic Pricing Engine for Petco',
        subtitle: 'React, Node.js, PostgreSQL, Redux',
        objective:
          'Built a pricing engine for dynamic product pricing with business-rule-driven updates.',
      },
      {
        title: 'ShareMyGaddi',
        subtitle: 'React, Node.js, MongoDB, REST',
        objective:
          'Developed a full-stack carpooling app with API-driven architecture.',
        github: 'https://github.com/karancode-singh/ShareMyGaddi-carpooling',
      },
      {
        title: 'Portfolio Website',
        subtitle: 'React, Static Deployment',
        objective: 'Designed and built a personal portfolio focused on clarity and usability.',
        github: 'https://github.com/codesahib/gursahibsingh',
        link: '/',
      },
    ],
  },
];

export default function Projects(props) {
  useEffect(() => {
    props.show_banner(false);
    props.show_home_link(true);
  }, [props]);

  document.title = 'Projects | Gursahib Singh';

  return (
    <div id="projectComponent">
      <header className="projects-header">
        <h1>Projects</h1>
        <p>Selected work across AI, software engineering, and full-stack product development.</p>
      </header>

      {projectData.map((category) => (
        <section key={category.category} className="project-category">
          <h2 className="category-title">{category.category}</h2>
          <div className="projects-row">
            {category.projects.map((proj) => (
              <article className="project-card" key={proj.title}>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-subtitle">{proj.subtitle}</p>
                <p className="project-objective">{proj.objective}</p>
                <div className="button-container">
                  {proj.github && (
                    <a className="btn btn-primary" href={proj.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a className="btn btn-secondary" href={proj.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                  {proj.link &&
                    (proj.link.startsWith('https://') ? (
                      <a className="btn btn-secondary" href={proj.link} target="_blank" rel="noopener noreferrer">
                        Link
                      </a>
                    ) : (
                      <Link className="btn btn-secondary" to={proj.link}>
                        Link
                      </Link>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
