import ProductTitle from "../components/ProductTitle/ProductTitle";
import ProductRating from "../components/ProductRating/ProductRating";
import ProductNav from "../components/ProductNav/ProductNav";
import ProductMain from "../components/ProductMain/ProductMain";
import SecondaryNav from "../components/SecondaryNav/SecondaryNav";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

export async function loader({ params }) {
  const results = await fetch(
    `http://localhost:3003/api/product/${params.productId}`
  );
  const productArray = await results.json();
  const product = productArray[0];

  return { product };
}

const ProductPage = () => {
  const { product } = useLoaderData();

  useEffect(() => {
    document.title = `${product.Title} | Download and Buy Today`;
  });

  return (
    <>
      <ProductTitle title={product.Title} />
      <ProductRating rating={product.overall_rating} id={product.id} />
      <ProductNav
        achievements={product.achievements}
        addOns={product.add_ons}
      />
      <SecondaryNav product={product} />
      <ProductMain product={product} />
    </>
  );
};

export default ProductPage;
