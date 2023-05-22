import EditionsAddons from "./EditionsAddons/EditionsAddons";
import EpicRatings from "./EpicRatings/EpicRatings";
import FollowUs from "./FollowUs/FollowUs";
import GenresFeatures from "./GenresFeatures/GenresFeatures";
import MediaCarousel from "./MediaCarousel/MediaCarousel";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductTagline from "./ProductTagline/ProductTagline";
import Ratings from "./Ratings/Ratings";
import Specifications from "./Specifications/Specifications";
import Achievements from "./Achievements/Achievements";

function ProductColumn({ product }) {
  return (
    <div className="max-w-4xl w-8/12 mr-16">
      <MediaCarousel id={product.id} />
      <ProductTagline tagline={product.Description} />
      <GenresFeatures id={product.id} />
      <ProductDescription
        image={product.description_img}
        description={product.StoryBoard}
      />
      <Achievements id={product.id} total_achievements={product.total_achievements}/>
      <EditionsAddons id={product.id} />
      <FollowUs id={product.id} />
      <EpicRatings id={product.id} overall_rating={product.overall_rating} />
      <Ratings id={product.id} color={product.color} />
      <Specifications id={product.id} />
    </div>
  );
}

export default ProductColumn;
