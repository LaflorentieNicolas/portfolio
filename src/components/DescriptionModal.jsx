import React from "react";
import "../sass/main.scss";

function DescriptionModal({ show, handleClose, description }) {
  if (!show) return null;

  return (
    <div className="description-modal" onClick={handleClose}>
      <div
        className="description-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="description-modal__header">
          <h2>Description du Projet</h2>
        </div>
        <div className="description-modal__body">
          <p>{description}</p>
        </div>
        <button
          className="description-modal__back-button"
          onClick={handleClose}
          aria-label="Back to Project Modal"
        >
          ← Retour
        </button>
      </div>
    </div>
  );
}

export default DescriptionModal;
