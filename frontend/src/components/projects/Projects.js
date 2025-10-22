import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// Example data structure: group projects by category
const projectData = [
  {
    category: "AI/ML",
    projects: [
        {
            title: "AI-Powered IoT Alert Analysis (PoC)",
            subtitle: "Python, LangChain, LLMs, IoT Logs, Kibana",
            motivation: "Manual log review is tedious and slow.",
            objective: "Automatically summarize anomalies and provide root-cause explanations using LLMs.",
        },
        {
            title: "Talk-to-My-CSV",
            subtitle: "Streamlit, LangChain, Ollama, Chroma, HuggingFace",
            motivation: "Make exploring CSV data fast and intuitive without writing code.",
            objective: "Enable users to ask questions and get answers from CSVs using a local AI model."
        },
        {
            "title": "Standardized Admission Data Parser - Corporate project",
            "subtitle": "Full Stack / NLP / Cloud Automation",
            "motivation": "Manual data entry is slow and error-prone.",
            "objective": "To automate extraction of structured insights from unformatted admission data using lightweight NLP models and AWS Lambda.",
        },
        {
            title: "Optimal Cryptocurrency Portfolio Selection Using Genetic Algorithm",
            subtitle: "Python, NumPy, Pandas, Matplotlib",
            motivation: "With so many Cryptocurrencies in the market, what to choose?",
            objective: "To find the optimal crypto portfolio given various assets using Genetic Algorithm techniques such as Natural Selection, Crossover and Mutation.",
            github: "https://github.com/codesahib/Optimal-crypto-portfolio.git",
            demo: "https://youtu.be/hmrj1J-Pwkk"
        }
    ]
  },
  {
    category: "Software Engineering",
    projects: [
        {
            title: "Smart Lighting for Microsoft- Corporate project",
            subtitle: "Python, MQTT, Docker",
            motivation: "Streamline building lighting control across multiple locations.",
            objective: "Develop a platform valued at $9M to process thousands of sensors for real-time lighting management.",
        },
        {
            title: "IoT Middleware for Google - Corporate project",
            subtitle: "Python, GCP, Java, MQTT, REST API",
            motivation: "Make IoT data flow smoothly and efficiently.",
            objective: "Build middleware to stream sensor data from Kafka to Google’s UDMI broker using GCP and Terraform.",
        },
        
    ]
  },
  {
    category: "Full Stack Web Apps",
    projects: [
        {
            "title": "Dynamic Pricing Engine for Petco",
            "subtitle": "React, Node, PostgreSQL, Redux",
            "motivation": "Real-time pricing is complex but crucial for competitive advantage.",
            "objective": "To build a dynamic pricing engine that adjusts product prices in real-time based on competitors, discounts, and sales.",
        },
        {
            title: "ShareMyGaddi - Carpool web application",
            subtitle: "Node, React, Jest, REST API, Swagger",
            motivation: "Web Stack Development is tough? Why not try it :)",
            objective: "To develop a full-stack carpooling web application using React.js, Node.js, MongoDB and including end-to-end testing using Jest and Cypress.io.",
            github: "https://github.com/karancode-singh/ShareMyGaddi-carpooling"
        },
        {
            title: "Portfolio Website",
            subtitle: "Django, React, REST API",
            motivation: "Paper based or even digital single page Resumes are boring",
            objective: "To create a dynamic and reactive web-based portfolio",
            github: "https://github.com/codesahib/gursahibsingh",
            link: "/home"
        },
        {
            title: "Project-ToDo",
            subtitle: "React, MongoDB",
            motivation: "There are todo list app available for a single tasks. But this web app will be a todo list to track projects. Each project can then have it's own set of tasks.",
            objective: "To learn React.js library with a hands-on project",
            github: "https://github.com/codesahib/Project-ToDo/tree/master/frontend",
            link: "https://codesahib.github.io/Project-ToDo/"
        }
    ]
  }
];

export default function Projects(props) {
  useEffect(() => {
    props.show_banner(false);
    props.show_home_link(true);
  }, [props]);

  document.title = "Projects | Gursahib Singh";

  return (
    <div id="projectComponent">
      {projectData.map((category) => (
        <div key={category.category} className="project-category">
          <h2 className="category-title">{category.category}</h2>
          <div className="projects-row">
            {category.projects.map((proj) => (
                <div className="project-card">
                    <h3 className="project-title">{proj.title}</h3>
                    <h6 className="project-subtitle">{proj.subtitle}</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para">
                        <strong>Motivation:</strong> {proj.motivation}
                        </p>
                        <p className="content-para">
                        <strong>Objective:</strong> {proj.objective}
                        </p>
                    </div>
                    <div className="button-container">
                        {proj.github && (
                        <a className="btn btn-github" href={proj.github} target="_blank">
                            GitHub
                        </a>
                        )}
                        {proj.demo && (
                        <a className="btn btn-demo" href={proj.demo} target="_blank">
                            Demo
                        </a>
                        )}
                       {
                            proj.link && (proj.link.startsWith("https://") ? (
                                <a  className="btn btn-link"
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Link
                                </a>
                            ) : (
                                <Link className="btn btn-link" to={proj.link}>
                                Link
                                </Link>
                            )
                        )}
                    </div>
                </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
