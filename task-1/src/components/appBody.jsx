import "../css/appBody.css";
import { products } from "../data/products";
import Card from "./card";

function AppBody() {
  return (
    <div id="body-container">
      <div id="list-container">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            firstPhotoUrl={product.firstPhotoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default AppBody;
