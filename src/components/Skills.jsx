import React, { useState, useEffect } from "react";
import "../sass/main.scss";

function Skills() {
  const [skills, setSkills] = useState({
    frontEnd: [],
    backEnd: [],
    other: [],
  });

  useEffect(() => {
    fetch("/data/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des compétences :", error)
      );
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Mes Compétences</h2>
      <div className="skills__category">
        <h3>Front-end</h3>
        <div className="skills__container">
          {skills.frontEnd.map((skill, index) => (
            <div key={index} className="skills__column">
              <img src={skill.logo} alt={skill.name} className="skills__logo" />
              <p className="skills__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills__category">
        <h3>Back-end</h3>
        <div className="skills__container">
          {skills.backEnd.map((skill, index) => (
            <div key={index} className="skills__column">
              <img src={skill.logo} alt={skill.name} className="skills__logo" />
              <p className="skills__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills__category">
        <h3>Autre</h3>
        <div className="skills__container">
          {skills.other.map((skill, index) => (
            <div key={index} className="skills__column">
              <img src={skill.logo} alt={skill.name} className="skills__logo" />
              <p className="skills__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
