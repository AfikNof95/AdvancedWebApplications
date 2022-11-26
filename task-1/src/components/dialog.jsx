import "../css/dialog.css";
import React, { useState } from "react";

function Dialog(props) {
  const { title, secondPhotoUrl, seller, description, onclose } = props;

  return (
    <>
      <div id="dialog-container">
        <div id="top-section-wrapper">
          <div>{title}</div>
          <div>Seller: {seller}</div>
          <button type="button" id="close-btn" onClick={onclose}>
            Close ❌
          </button>
        </div>
        <div id="description-border">
          <p>{description}</p>
        </div>
        <img
          className="card-image"
          src={secondPhotoUrl}
          alt={title}
          width="65px"
          height="65px"
        />
      </div>
    </>
  );
}

export default Dialog;
