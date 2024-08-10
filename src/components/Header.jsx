import { NavLink } from "react-router-dom";
import "../sass/main.scss";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <p>Test</p>
      </NavLink>
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
