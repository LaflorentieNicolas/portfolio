import React, { useState, useEffect } from "react";
import "../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        hideModal();
      }
    };

    if (modalVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVisible]);

  return (
    <footer>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/nicolas-laflorentie-b1880927/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            aria-label="LinkedIn"
            className="logo"
          />
        </a>

        <FontAwesomeIcon
          icon={faEnvelope}
          aria-label="Email"
          className="logo"
          onClick={() => showModal("laflorentie.nicolas@gmail.com")}
        />

        <FontAwesomeIcon
          icon={faPhone}
          aria-label="Phone"
          className="logo"
          onClick={() => showModal("06.85.60.59.88")}
        />
      </div>
      {modalVisible && (
        <div className="modal-overlay" onClick={hideModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact</h2>
            <p>{modalContent}</p>
            <button onClick={hideModal}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
