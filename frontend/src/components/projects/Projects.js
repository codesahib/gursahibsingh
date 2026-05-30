import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectData = [
  {
    category: 'AI and Intelligent Systems',
    projects: [
      {
        title: 'AI-Powered IoT Alert Analysis (Siemens PoC)',
        subtitle: 'LangChain, LLMs, IoT Logs, Kibana',
        objective:
          'Built an anomaly summarization and root-cause explanation workflow that reduced diagnostic time by 45%.',
      },
      {
        title: 'Standardized Admission Data Parser (Bluekey AI)',
        subtitle: 'AWS Services, Parsing Pipelines, EdTech Data',
        objective:
          'Reduced manual admission data entry by 80% and supported a 25% increase in user engagement.',
      },
      {
        title: 'Talk-to-My-CSV',
        subtitle: 'Streamlit, LangChain, Ollama, Chroma',
        objective:
          'Built a natural-language interface to query CSV datasets without writing SQL or code.',
      },
      {
        title: 'Optimal Cryptocurrency Portfolio Selection',
        subtitle: 'Python, NumPy, Pandas, Genetic Algorithm',
        objective:
          'Modeled portfolio optimization using mutation, crossover, and selection strategies.',
        github: 'https://github.com/codesahib/Optimal-crypto-portfolio.git',
        demo: 'https://youtu.be/hmrj1J-Pwkk'
      }
    ],
  },
  {
    category: 'Platform and Architecture',
    projects: [
      {
        title: 'IoT/SaaS Greenfield Platform Delivery (Brickeye)',
        subtitle: 'BMAD Workflow, Domain-Driven Design, CI/CD',
        objective:
          'Led end-to-end AI-assisted delivery workflow with stronger traceability and higher engineering throughput.',
      },
      {
        title: 'Scalable Alerts and Events Pipeline (Brickeye)',
        subtitle: 'Kafka, Kafka Streams, Event-Driven Architecture',
        objective:
          'Improved throughput and reduced latency for a high-traffic event system powering production alerts.',
      },
      {
        title: 'Google IoT Middleware Integration',
        subtitle: 'Kafka, GCP, Terraform, UDMI',
        objective:
          'Built a reliable Kafka-to-UDMI ingestion pipeline with improved observability and infra automation.',
      },
    ],
  },
  {
    category: 'Product Engineering and Delivery',
    projects: [
      {
        title: 'Smart Lighting System for Microsoft',
        subtitle: 'IoT Telemetry, Secure Provisioning, Real-Time Control',
        objective:
          'Led development for a $9M deployment across 9 buildings with delivery completed in 6 months.',
      },
      {
        title: 'Dynamic Pricing Engine for Petco',
        subtitle: 'React, Node.js, PostgreSQL, GraphQL, Redux',
        objective:
          'Delivered full-stack pricing automation and improved data processing efficiency by 25%.',
      },
      {
        title: 'Contract and E2E Quality Strategy',
        subtitle: 'Pact, Playwright, CI Quality Gates',
        objective:
          'Introduced automated integration and E2E testing practices that improved release reliability.',
      },
      {
        title: 'ShareMyGaddi',
        subtitle: 'React, Node.js, MongoDB, REST',
        objective:
          'Developed a full-stack carpooling platform with API-driven architecture and scalable backend modules.',
        github: 'https://github.com/karancode-singh/ShareMyGaddi-carpooling',
      },
      {
        title: 'Project-ToDo',
        subtitle: 'React, MongoDB',
        objective:
          'Built a project-centric to-do web application where each project maintains its own task lifecycle.',
        github: 'https://github.com/codesahib/Project-ToDo/tree/master/frontend',
        link: 'https://codesahib.github.io/Project-ToDo/'
      },
      {
        title: 'Portfolio Website',
        subtitle: 'React, Static Deployment',
        objective: 'Designed and built a personal portfolio focused on clarity, usability, and professional storytelling.',
        github: 'https://github.com/codesahib/gursahibsingh',
        link: '/'
      }
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
        <h1>Selected Work</h1>
        <p>Experience-backed project highlights aligned with business impact and engineering outcomes.</p>
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
                {(proj.github || proj.demo || proj.link) && (
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
                    {proj.link && (proj.link.startsWith('https://') ? (
                      <a className="btn btn-secondary" href={proj.link} target="_blank" rel="noopener noreferrer">
                        Link
                      </a>
                    ) : (
                      <Link className="btn btn-secondary" to={proj.link}>
                        Link
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
