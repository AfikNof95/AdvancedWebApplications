import "../css/card.css";

const onCardClick = () => {
  alert("lol");
  window.open("http://localhost:3000/product", "_blank", "noopener,noreferrer");
};

function Card(props) {
  const { title, price, secondPhotoUrl, seller, description } = props;

  return (
    <div id="card-container" onClick={onCardClick}>
      <div id="product-title-price-container">
        <div>{props.title}</div>
        <div>{props.price}</div>
      </div>
      <span>{props.imgUrl}Pic container</span>
    </div>
  );
}

export default Card;
