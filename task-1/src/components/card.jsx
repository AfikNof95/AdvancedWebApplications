import "../css/card.css";
import React, { useState } from "react";

function Card(props) {
  const {
    title,
    price,
    firstPhotoUrl,
    secondPhotoUrl,
    description,
    seller,
    onclick,
  } = props;

  return (
    <div
      id="card-container"
      onClick={() => onclick({ title, secondPhotoUrl, description, seller })}
    >
      <div id="product-title-price-container">
        <div>{title}</div>
        <div>{price}</div>
      </div>
      <img
        className="card-image"
        src={firstPhotoUrl}
        alt={title}
        width="65px"
        height="65px"
      />
    </div>
  );
}

export default Card;
