import { useState } from "react";

const FormAddProduct = ({ httpConfig }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    httpConfig("POST", newProduct);
  };

  return (
    <form onSubmit={addProduct}>
      <input
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
        placeholder="Product name here..."
      />
      <input
        type="number"
        onChange={(e) => setProductPrice(e.target.value)}
        value={productPrice}
        placeholder="Price here..."
      />
      <input
        type="number"
        onChange={(e) => setProductPurchases(e.target.value)}
        value={productPurchases}
        placeholder="Purchases here..."
      />

      <input type="submit" value="Add product" />
    </form>
  );
};

export default FormAddProduct;
