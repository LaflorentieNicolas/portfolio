import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import "../sass/main.scss";

function ProjectModal({ show, handleClose, project }) {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="project-modal">
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {project.pictures.map((pic, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={pic} alt={` ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-description">
          <h4>Description</h4>
          <p>{project.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {project.codeLink && (
          <Button variant="primary" href={project.codeLink} target="_blank">
            Code Github
          </Button>
        )}
        {project.webSite && (
          <Button variant="secondary" href={project.webSite} target="_blank">
            Démo
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
