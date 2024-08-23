import React from "react";
import "../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <section id="contact" className="footer">
        <h2 className="footer__title">Me contacter</h2>
        <div className="footer__contact">
          <div className="footer__contact-item">
            <FontAwesomeIcon
              icon={faPhone}
              aria-label="Phone"
              className="logo"
            />
            <a href="tel:0685605988" className="footer__contact-link">
              06 85 60 59 88
            </a>
          </div>
          <div className="footer__contact-item">
            <FontAwesomeIcon
              icon={faEnvelope}
              aria-label="Email"
              className="logo"
            />
            <a
              href="mailto:laflorentie.nicolas@gmail.com"
              className="footer__contact-link"
            >
              laflorentie.nicolas@gmail.com
            </a>
          </div>
        </div>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/nicolas-laflorentie-b1880927/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              aria-label="LinkedIn"
              className="logo"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
