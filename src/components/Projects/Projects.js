import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Banking System (ASP.NET MVC)",
      description:
        "A secure online banking app with user authentication, credit/debit operations, and transaction history management.",
      link: "https://yourbankingprojectlink.com",
    },
    {
      title: "Buttercup Events (ASP.NET Core)",
      description:
        "An event management web app for art exhibitions — built with ASP.NET Core, featuring attendee registration and admin controls.",
      link: "https://yourbuttercupeventslink.com",
    },
    {
      title: "Portfolio Website (React)",
      description:
        "My personal portfolio showcasing projects, skills, and contact information with smooth scrolling and responsive design.",
      link: "https://yourportfolio.com",
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
