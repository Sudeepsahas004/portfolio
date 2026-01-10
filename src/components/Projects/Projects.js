import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Cinemate",
      description:
        "A movie browsing web app that displays trending, popular, and top-rated movies with detailed information like ratings, genres, and trailers.",
      link: "https://sahasmatee.netlify.app/",
    },
    {
      title: "SahasAdidas",
      description:
        "An e-commerce web application inspired by Adidas, featuring product listings, category filtering, add-to-cart functionality, and a modern UI.",
      link: "https://sahasadidas.netlify.app/",
    },
    {
      title: "Luxury Cars",
      description:
        "A showcase website for luxury cars displaying premium brands, specifications, pricing details, and high-quality visuals for car enthusiasts.",
      link: "https://sahasluxurycars.netlify.app/",
    },
    {
      title: "Todo List",
      description:
        "A simple and efficient task management application that allows users to add, update, mark complete, and delete daily tasks.",
      link: "https://sahastodolist.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projectsSection">
      <h2 className="projectsTitle">My Projects</h2>

      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectBtn"
            >
              <button>Click to See Page</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
