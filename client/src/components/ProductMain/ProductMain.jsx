import ProductColumn from "./ProductColumn/ProductColumn";
import ProductDetails from "./ProductDetails/ProductDetails";
// import { useEffect, useState } from "react";

function ProductMain({ product }) {
  return (
    <>
      <section className="flex w-full">
        <ProductColumn product={product} />
        <ProductDetails product={product} />
      </section>
    </>
  );
}

export default ProductMain;
