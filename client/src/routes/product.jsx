import ProductTitle from "../components/ProductTitle/ProductTitle";
import ProductRating from "../components/ProductRating/ProductRating";
import ProductNav from "../components/ProductNav/ProductNav";
import ProductMain from "../components/ProductMain/ProductMain";

const ProductPage = () => {
  return (
    <>
      <ProductTitle />
      <ProductRating />
      <ProductNav />
      <ProductMain />
    </>
  );
};

export default ProductPage;
