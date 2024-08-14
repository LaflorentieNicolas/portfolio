import { NavLink } from "react-router-dom";
import "../sass/main.scss";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              A propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" activeclassname="active">
              Mes projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" activeclassname="active">
              CV
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
