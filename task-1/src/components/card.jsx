import "../css/card.css";
import React, { useState } from "react";
import Dialog from "./dialog";

function Card(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onCardClick = () => {
    setIsDialogOpen((prevIsDialogOpen) => !prevIsDialogOpen);

    setTimeout(() => {
      setIsDialogOpen((prevIsDialogOpen) => !prevIsDialogOpen);
    }, 7000);
  };

  return (
    <>
      {isDialogOpen && (
        <Dialog
          title={props.title}
          secondPhotoUrl={props.secondPhotoUrl}
          seller={props.seller}
          description={props.description}
        />
      )}
      {!isDialogOpen && (
        <div id="card-container" onClick={onCardClick}>
          <div id="product-title-price-container">
            <div>{props.title}</div>
            <div>{props.price}</div>
          </div>
          <img
            className="card-image"
            src={props.firstPhotoUrl}
            alt={props.title}
            width="65px"
            height="65px"
          />
        </div>
      )}
    </>
  );
}

export default Card;
