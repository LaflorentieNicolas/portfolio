import React, { useState } from "react";
import Carousel from "./Carousel";
import DescriptionModal from "./DescriptionModal"; // Importer la nouvelle modal
import "../sass/main.scss";

function ProjectModal({ show, handleClose, project }) {
  const [isDescriptionModalOpen, setDescriptionModalOpen] = useState(false);

  if (!show) return null;

  const openDescriptionModal = () => {
    setDescriptionModalOpen(true);
  };

  const closeDescriptionModal = () => {
    setDescriptionModalOpen(false);
  };

  return (
    <>
      <div className="modal" onClick={handleClose}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <button
              className="modal__close-button"
              onClick={handleClose}
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className="modal__title">{project.title}</h3>
          </div>
          <div className="modal-body">
            <Carousel images={project.pictures} />
            <div className="modal-body__project-description">
              <button
                className="btn btn-description"
                onClick={openDescriptionModal}
              >
                Afficher la Description
              </button>
            </div>
            <div className="modal-body__language">
              <h4 className="modal-body__title">Technologies et outils</h4>
              <div className="modal-body__language-logos">
                {project.language.map((logo, index) => (
                  <div key={index} className="modal-body__language-item">
                    <img
                      src={logo}
                      alt=""
                      title={project.languageNames[index]}
                    />
                    <p>{project.languageNames[index]}</p>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            {project.codeLink && project.codeLink.trim() !== "" && (
              <a
                className="btn btn-primary"
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Github
              </a>
            )}

            {project.webSite && project.webSite.trim() !== "" && (
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

      <DescriptionModal
        show={isDescriptionModalOpen}
        handleClose={closeDescriptionModal}
        description={project.description}
      />
    </>
  );
}

export default ProjectModal;
