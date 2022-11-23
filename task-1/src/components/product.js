import "./product.css";
export function Product({ name, description, price, imageURL, imageURLTwo,onClick }) {
  return (
    <div className="card" onClick={()=>onClick({name,description,price,imageURLTwo})}>
      <div className="card-details">
        <div className="card-title">{name}</div>
        <div className="card-text ">
          <div className="card-desc">{description}</div>
          <div className="card-price">Price: {price}$</div>
        </div>
      </div>
      <div className="card-image-holder">
        <img className="card-img" alt="" src={imageURL}></img>
      </div>
    </div>
  );
}
