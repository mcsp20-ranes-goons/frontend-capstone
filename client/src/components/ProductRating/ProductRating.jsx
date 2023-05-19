import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function ProductRating({ rating, id }) {
  const [epicRatings, setEpicRatings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/api/epicratings/${id}`)
      .then((res) => res.json())
      .then((data) => setEpicRatings(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="flex items-center gap-2 my-2">
      <div className="flex">
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
      </div>
      <p className="text-neutral-400 bg-neutral-800 w-fit px-1 py-0.5 rounded">
        {rating}
      </p>
      {epicRatings.slice(0, 2).map((epicRating) => {
        return (
          <div key={epicRating.id} className="flex gap-2 items-center mr-2">
            <img className="h-6 w-6" src={epicRating.icon} alt={epicRating.title} />
            <p>{epicRating.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductRating;
