import "../css/appBody.css";
import {products} from "../data/products";
import Card from "./card";

function AppBody() {
  console.log(products);
  return (
    <div id="body-container">
      <div id="list-container">
        {products.map((product) => (
          <div>
            <Card
              title={product.title}
              price={product.price}
              imgUrl={product.firstPhotoUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppBody;
