import React, { useState, useRef, useEffect } from "react";
import "../sass/main.scss";

const menusLogo = "/img/logo/menusLogo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <header>
      <nav className="desktop-navbar">
        <ul>
          <li>
            <a href="#about">A propos</a>
          </li>
          <li>
            <a href="#project">Projets</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-navbar" ref={mobileMenuRef}>
        <img
          className="menus-logo"
          src={menusLogo}
          alt="Menu Logo"
          onClick={toggleMenu}
        />
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#project">Projets</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
