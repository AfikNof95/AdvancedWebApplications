import "../css/card.css";

const onCardClick = () => {
  window.open("http://localhost:3000/", "_blank", "noopener,noreferrer");
};

function Card(props) {
  const { title, price, firstPhotoUrl, secondPhotoUrl, seller, description } =
    props;

  return (
    <div id="card-container" onClick={onCardClick}>
      <div id="product-title-price-container">
        <div>{props.title}</div>
        <div>{props.price}</div>
      </div>
      <img className="card-image"
        src={props.firstPhotoUrl}
        alt={props.title}
        width="65px"
        height="65px"
      />
    </div>
  );
}

export default Card;
