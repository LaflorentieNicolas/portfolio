import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import getProjects from "../api/getProjects";
import ProjectModal from "../components/ProjectModal";
import "../sass/main.scss";

const profilePicture = "/img/profile-picture/profil-picture.webp";

function Home() {
  const [projectData, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const projects = await getProjects();
        if (Array.isArray(projects)) {
          setData(projects);
        } else {
          throw new Error("Données invalides reçues");
        }
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <main>
      <section id="about" className="about__me">
        <img
          src={profilePicture}
          alt="Laflorentie Nicolas"
          className="about__me-photo"
        />
        <h1 className="about__me-name">Nicolas Laflorentie</h1>
        <p className="about__me-description">
          Après 17 ans d'expérience en tant que{" "}
          <a
            className="link__assurance"
            href="https://www.sagesse.fr/zoom-lagence-sagesse-montauban-succursale-groupe-sagesse/"
            target="_blank"
            rel="noreferrer"
          >
            courtier d'assurance
          </a>
          , où j'ai acquis une expertise solide en gestion de projets et en
          relations client, j'ai décidé de réorienter ma carrière vers un
          domaine qui a toujours éveillé ma curiosité : le développement web.
          Depuis mon plus jeune âge, j'ai été passionné par l'informatique, tant
          du côté matériel que logiciel. Cette passion m'a finalement poussé à
          franchir le pas et à suivre une formation diplômante chez
          OpenClassrooms. <br /> J'ai ainsi le plaisir de vous présenter mon
          portfolio.
        </p>
      </section>
      {error && <span>{error.message}</span>}
      <section id="project" className="projects__container-wrapper">
        <div className="projects__container">
          <h2 className="projects__container__title">Mes projets</h2>
          <div className="card-container">
            {Array.isArray(projectData) && projectData.length > 0 ? (
              projectData.map((project) => (
                <Card
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  cover={project.cover}
                  onPress={() => handleCardClick(project)}
                />
              ))
            ) : (
              <p>Aucun projet disponible</p>
            )}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          show={showModal}
          handleClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </main>
  );
}

export default Home;
