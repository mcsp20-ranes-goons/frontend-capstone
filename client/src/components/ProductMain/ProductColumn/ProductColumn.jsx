import EditionsAddons from "./EditionsAddons/EditionsAddons";
import EpicRatings from "./EpicRatings/EpicRatings";
import FollowUs from "./FollowUs/FollowUs";
import GenresFeatures from "./GenresFeatures/GenresFeatures";
import MediaCarousel from "./MediaCarousel/MediaCarousel";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductTagline from "./ProductTagline/ProductTagline";
import Ratings from "./Ratings/Ratings";
import Specifications from "./Specifications/Specifications";

function ProductColumn({ product }) {
  return (
    <div className="max-w-4xl mr-16">
      <MediaCarousel />
      <ProductTagline tagline={product.Description} />
      <GenresFeatures />
      <ProductDescription image={product.description_img} description={product.StoryBoard} />
      <EditionsAddons />
      <FollowUs />
      <EpicRatings />
      <Ratings />
      <Specifications />
    </div>
  );
}

export default ProductColumn;
