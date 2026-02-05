import "./Card.css";

function Card({ title, image, description }) {
  return (
    <article className="information-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>              
  );
}

export default Card;
