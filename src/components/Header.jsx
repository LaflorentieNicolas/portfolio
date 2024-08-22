import "../sass/main.scss";

function Header() {
  return (
    <header>
      <nav>
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
    </header>
  );
}

export default Header;
