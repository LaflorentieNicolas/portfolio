import React from "react";
import Carousel from "./Carousel";
import "../sass/main.scss";

function ProjectModal({ show, handleClose, project }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button
            className="close-button"
            onClick={handleClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <h2 className="modal-title">{project.title}</h2>
        </div>
        <div className="modal-body">
          <Carousel images={project.pictures} />

          <div className="language">
            <h4>Technologies et outils</h4>
            <div className="language-logos">
              {project.language.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Langage ${index}`}
                  title={project.languageNames[index]} // Utilise les noms des technologies
                />
              ))}
            </div>
          </div>

          <div className="project-description">
            <h4>Description</h4>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="modal-footer">
          {project.codeLink && (
            <a
              className="btn btn-primary"
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Github
            </a>
          )}
          {project.webSite && (
            <a
              className="btn btn-secondary"
              href={project.webSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
