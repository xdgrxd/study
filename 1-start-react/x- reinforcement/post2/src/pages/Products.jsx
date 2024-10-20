import { useEffect, useState } from "react";

const Products = () => {
  const url = "http://localhost:3000/products/";

  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setProducts(json);
    };

    fetchData();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json", // <== HERE
      },
      body: JSON.stringify(newProduct),
    });

    const addedProduct = await res.json(); // <== HERE
    setProducts((prev) => [...prev, addedProduct]);
  };

  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={addProduct}>
        <input
          type="text"
          name="productName"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          name="productPrice"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <input
          type="number"
          name="productPurchases"
          onChange={(e) => setProductPurchases(e.target.value)}
          value={productPurchases}
        />

        <input type="submit" value="Add product" />
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Preço</th>
            <th>Vendas</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.purchases}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
