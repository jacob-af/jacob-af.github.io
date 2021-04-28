import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div>
      <img
        className="img-fluid d-block"
        src={project.image}
        alt={project.name}
      />
      <div className="text-center">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>
          Deployed Site:{" "}
          <Link
            to={{
              pathname: project.deployedLink
            }}
            target="_blank"
            rel="noreferrer"
          >
            {project.name}
          </Link>
        </p>
        <p>
          GitHub Repository:{" "}
          <Link
            to={{
              pathname: project.githubLink
            }}
            target="_blank"
            rel="noreferrer"
          >
            {project.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Project;
