import React from "react";
import "../sass/main.scss";

function Home() {
  return (
    <main>
      <div className="about__me">
        <img
          src="votre-chemin/vers-limage.jpg"
          alt="Votre Nom"
          className="about__me-photo"
        />
        <h1 className="about__me-name">Nicolas Laflorentie</h1>
        <p className="about__me-description">
          Après avoir travaillé pendant 17 ans en tant que{" "}
          <a
            className="link__assurance"
            href="https://www.sagesse.fr/zoom-lagence-sagesse-montauban-succursale-groupe-sagesse/"
            target="_blank"
            rel="noreferrer"
          >
            courtier d'assurance
          </a>
          , où j'ai développé une solide expertise en gestion de projets et en
          relations client, j'ai décidé de réorienter ma carrière vers un
          domaine qui me passionne depuis longtemps : le développement web.
        </p>
      </div>
    </main>
  );
}

export default Home;
