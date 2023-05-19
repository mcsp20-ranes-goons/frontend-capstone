import ProductTitle from "../components/ProductTitle/ProductTitle";
import ProductRating from "../components/ProductRating/ProductRating";
import ProductNav from "../components/ProductNav/ProductNav";
import ProductMain from "../components/ProductMain/ProductMain";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const results = await fetch(`http://localhost:3000/api/product/${params.productId}`);
  const productArray = await results.json()

  // NOTE: single product comes back as an array with 1 object. grabbing that object.
  const product = productArray[0]

  return { product };
}

const ProductPage = () => {
  const { product } = useLoaderData()
  return (
    <>
      <ProductTitle title={product.Title} />
      <ProductRating product={product} />
      <ProductNav achievements={product.achievements} addOns={product.add_ons} />
      <ProductMain product={product} />
    </>
  );
};

export default ProductPage;
