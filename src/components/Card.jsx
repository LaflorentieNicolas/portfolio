import React from "react";

function Card({ id, title, cover, onPress }) {
  return (
    <div className="card" onClick={() => onPress(id)}>
      <h3 className="card__title">{title}</h3>
      <img src={cover} alt={title} className="card__cover" />
    </div>
  );
}

export default Card;
