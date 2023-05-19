import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Ratings({ id, color }) {
  const [ratings, setRatings] = useState([]);
  const [critics, setCritics] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/api/ratings/${id}`)
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((e) => console.log(e));

    fetch(`http://localhost:3004/api/critics/${id}`)
      .then((res) => res.json())
      .then((data) => setCritics(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      <h1 className="text-xl">Ratings</h1>
      <div className="flex items-end justify-between mt-4">
        <div className="flex gap-4">
          {critics.map((critic) => (
            <div key={critic.id} className="flex flex-col items-center gap-1">
              <div
                className="bg-blue-500 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center"
                style={color ? { backgroundColor: color } : null}
              >
                <div className="bg-neutral-900 rounded-full h-16 w-16 text-neutral-300 flex justify-center items-center">
                  {critic.rating}
                </div>
              </div>
              <p>{critic.name}</p>
            </div>
          ))}
        </div>

        <a
          href={
            {
              /* TODO */
            }
          }
          className="text-neutral-400 flex items-center gap-1"
        >
          SEE ALL REVIEWS
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="flex gap-4 my-4">
        {ratings.map((rating) => (
          <div key={rating.id} className="bg-neutral-800 w-1/3 p-4">
            <h2>{rating.title}</h2>
            <h3 className="text-neutral-400">by {rating.author}</h3>
            <hr className="border-neutral-700 my-4" />
            <p className="mb-4">{rating.rating}</p>
            <p className="text-neutral-400 mb-4">{rating.review}</p>
            <p>
              <a
                className="underline flex items-center text-neutral-400 gap-1"
                href={rating.url}
              >
                READ FULL REVIEW
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm text-neutral-400">Reviews provided by OpenCritic</p>
    </div>
  );
}

export default Ratings;
