import ProductColumn from "./ProductColumn/ProductColumn";
import ProductDetails from "./ProductDetails/ProductDetails";
import { useEffect, useState } from "react";

function ProductMain() {
  // pass that data into proudct col and product details
  const [data, setData] = useState([]);
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((response) => response.json())
      .then((data) => setData(data[0]));
  }, []);

  return (
    <>
      <section>
        <ProductColumn data={data} />
        <ProductDetails data={data} />
      </section>
    </>
  );
}

export default ProductMain;
