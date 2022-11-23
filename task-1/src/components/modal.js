import "./modal.css";

export function Modal({
  title,
  content,
  imageURL,
  showModal = false,
  onClose,
}) {
  const className = showModal ? "modal show" : "modal hide";

  return (
    <div className={className}>
      <div className="modal-title">
        <div className="modal-title-text">
          <h2>{title}</h2>
        </div>

        <div className="modal-close">
          <button type="button" className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
      <div className="modal-content">
        <div className="modal-text">{content}</div>
        <div className="modal-image">
          <img src={imageURL} alt=""></img>
        </div>
      </div>
    </div>
  );
}
