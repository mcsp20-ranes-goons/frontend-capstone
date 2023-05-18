import EditionsAddons from "./EditionsAddons/EditionsAddons";
import EpicRatings from "./EpicRatings/EpicRatings";
import FollowUs from "./FollowUs/FollowUs";
import GenresFeatures from "./GenresFeatures/GenresFeatures";
import MediaCarousel from "./MediaCarousel/MediaCarousel";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductTagline from "./ProductTagline/ProductTagline";
import Ratings from "./Ratings/Ratings";
import Specifications from "./Specifications/Specifications";

function ProductColumn({ data }) {
  return (
    <div className="w-[826px]">
      <h1>ProductColumn</h1>
      <MediaCarousel data={data} />
      <ProductTagline data={data} />
      <GenresFeatures data={data} />
      <ProductDescription data={data} />
      <EditionsAddons data={data} />
      <FollowUs data={data} />
      <EpicRatings data={data} />
      <Ratings data={data} />
      <Specifications data={data} />
    </div>
  );
}

export default ProductColumn;
