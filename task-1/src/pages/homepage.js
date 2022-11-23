import { Product } from "../components/product";
import { Modal } from "../components/modal";
import products from "../data/products";
import "./homepage.css";
import { useState } from "react";
export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [className, setClassName] = useState("");

  const handleProductClick = (product) => {
    debugger;
    setShowModal(true);
    setModalData(product);
    setClassName("modal-show");
  };

  const handleModalClose = () => {
    setShowModal(false);
    setClassName("");
  };

  const productList = products.map((product) => (
    <Product
      key={product.imageURL}
      name={product.name}
      price={product.price}
      description={product.description}
      imageURL={product.imageURL}
      imageURLTwo={product.imageURLTwo}
      onClick={handleProductClick}
    ></Product>
  ));

  return (
    <div className={className}>
      <div className="navbar">
        <span className="navbar-title">Afik & Omer</span>
      </div>

      <div className="products-container">{productList}</div>
      <Modal
        showModal={showModal}
        title={modalData.name}
        content={modalData.description}
        imageURL={modalData.imageURLTwo}
        onClose={handleModalClose}
      ></Modal>
    </div>
  );
}
