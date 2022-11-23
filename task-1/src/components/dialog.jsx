import "../css/dialog.css";
import React, { useState } from "react";

const onCloseHandler = () => {
  alert("Closes in less than 6 seconds");
};

function Dialog(props) {
  const { title, secondPhotoUrl, seller, description } = props;

  return (
    <>
      <div id="dialog-container">
        <div id="top-section-wrapper">
          <div>{props.title}</div>
          <div>Seller: {props.seller}</div>
          <button type="button" id="close-btn" onClick={onCloseHandler}>
            Close ❌
          </button>
        </div>
        <div id="description-border">
          <p>{props.description}</p>
        </div>
        <img
          className="card-image"
          src={props.secondPhotoUrl}
          alt={props.title}
          width="65px"
          height="65px"
        />
      </div>
    </>
  );
}

export default Dialog;
