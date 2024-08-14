import "../sass/main.scss";

function Card({ cover, title, id, onPress }) {
  return (
    <div
      className="card"
      data-id={id}
      onClick={onPress}
      style={{ cursor: "pointer" }}
    >
      <p className="card__title">{title}</p>
      <img className="card__image" src={cover} alt={title} />
    </div>
  );
}

export default Card;
