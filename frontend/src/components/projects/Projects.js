import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// Example data structure: group projects by category
const projectData = [
  {
    category: "Machine Learning Research Projects",
    projects: [
      {
        title: "Optimal Cryptocurrency Portfolio Selection Using Genetic Algorithm",
        subtitle: "(Machine Learning Research Project)",
        motivation: "With so many Cryptocurrencies in the market, what to choose?",
        objective: "To find the optimal crypto portfolio given various assets using Genetic Algorithm techniques such as Natural Selection, Crossover and Mutation.",
        github: "https://github.com/codesahib/Optimal-crypto-portfolio.git",
        demo: "https://youtu.be/hmrj1J-Pwkk"
      }
    ]
  },
  {
    category: "Full Stack Web Apps",
    projects: [
      {
        title: "ShareMyGaddi - Carpool web application",
        subtitle: "(Full Stack Web App)",
        motivation: "Web Stack Development is tough? Why not try it :)",
        objective: "To develop a full-stack carpooling web application using React.js, Node.js, MongoDB and including end-to-end testing using Jest and Cypress.io.",
        github: "https://github.com/karancode-singh/ShareMyGaddi-carpooling"
      },
      {
        title: "Portfolio Website",
        subtitle: "(A Dynamic Resume)",
        motivation: "Paper based or even digital single page Resumes are boring",
        objective: "To create a dynamic and reactive web-based portfolio",
        github: "https://github.com/codesahib/mysite",
        link: "/home"
      },
      {
        title: "Project-ToDo",
        subtitle: "(React.js Single Page App)",
        motivation: "There are todo list app available for a single tasks. But this web app will be a todo list to track projects. Each project can then have it's own set of tasks.",
        objective: "To learn React.js library with a hands-on project",
        github: "https://github.com/codesahib/Project-ToDo/tree/master/frontend",
        link: "https://codesahib.github.io/Project-ToDo/"
      }
    ]
  }
  // Add other categories and projects here
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
                        {proj.link && (
                        <Link className="btn btn-link" to={proj.link}>
                            Link
                        </Link>
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
