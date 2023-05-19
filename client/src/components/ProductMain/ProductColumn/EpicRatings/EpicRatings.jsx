import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function EpicRatings() {
  const [epicRatings, setEpicRatings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/epicratings/1")
      .then((res) => res.json())
      .then((data) => setEpicRatings(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex flex-col my-6">
      <h2 className="text-xl">Epic Player Ratings</h2>
      <h3 className="text-neutral-400">
        Captured from players in the Epic Games ecosystem.
      </h3>

      <div className="flex justify-center gap-2 items-center mt-4">
        <p className="text-4xl">4.4</p>
        <div className="flex">
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
        </div>
      </div>

      <div className="flex flex-wrap mt-4 gap-6">
        {epicRatings.map((rating) => (
            <div
              key={rating.id}
              className="bg-neutral-800 w-[30%] py-12 gap-2 flex flex-col justify-center items-center rounded"
            >
              <img src={rating.icon} alt="" />
              <p className="text-sm text-neutral-400">This game has</p>
              <p className="text-2xl font-bold w-3/4 text-center">
                {rating.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EpicRatings;
