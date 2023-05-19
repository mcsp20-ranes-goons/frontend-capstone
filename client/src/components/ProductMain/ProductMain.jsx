import ProductColumn from "./ProductColumn/ProductColumn";
import ProductDetails from "./ProductDetails/ProductDetails";
// import { useEffect, useState } from "react";

function ProductMain({ product }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/product")
  //     .then((response) => response.json())
  //     .then((data) => setData(data[0]));
  // }, []);

  return (
    <>
      <section>
        <ProductColumn product={product} />
        <ProductDetails product={product} />
      </section>
    </>
  );
}

export default ProductMain;
