import React from "react";
import "../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
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

        <a href="mailto:laflorentie.nicolas@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            aria-label="Email"
            className="logo"
          />
        </a>

        <a href="tel:0685605988">
          <FontAwesomeIcon icon={faPhone} aria-label="Phone" className="logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
