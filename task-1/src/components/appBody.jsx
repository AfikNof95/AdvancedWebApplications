import { useState } from "react";
import "../css/appBody.css";
import { products } from "../data/products";
import Card from "./card";
import Dialog from "./dialog";

function AppBody() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});

  const modalToggle = () => {
    setIsDialogOpen((prevIsDialogOpen) => !prevIsDialogOpen);
  };

  const onCardClick = (product) => {
    modalToggle();
    setDialogData(product);
  };

  const closeDialog = () => {
    modalToggle();
  };

  const productList = products.map((product, index) => (
    <Card
      key={index}
      title={product.title}
      price={product.price}
      firstPhotoUrl={product.firstPhotoUrl}
      secondPhotoUrl={product.secondPhotoUrl}
      description={product.description}
      seller={product.seller}
      onclick={onCardClick}
    />
  ));

  return (
    <div id="body-container">
      <div id="list-container">
        {productList}
        <div id="modal">
          <>
            {isDialogOpen && (
              <Dialog
                title={dialogData.title}
                secondPhotoUrl={dialogData.secondPhotoUrl}
                seller={dialogData.seller}
                description={dialogData.description}
                onclose={closeDialog}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default AppBody;
