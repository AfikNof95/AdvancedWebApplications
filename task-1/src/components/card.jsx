import "../css/card.css";

const onCardClick = () => {
  alert("click");
};

function Card(props) {
  return (
    <div id="card-container" onClick={onCardClick}>
      <div id="product-title-price-container">
        <span>{props.title}</span>
        <span>{props.price}</span>
      </div>
      <span>{props.imgUrl}</span>
    </div>
  );
}

export default Card;
