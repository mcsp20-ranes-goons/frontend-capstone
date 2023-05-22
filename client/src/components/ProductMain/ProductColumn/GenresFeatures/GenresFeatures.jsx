import { useEffect, useState } from "react";

function Genres({ id }) {
  const [genres, setGenres] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3006/api/genres/${id}`)
      .then((res) => res.json())
      .then((data) => setGenres(data));
    fetch(`http://localhost:3006/api/features/${id}`)
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, [id]);

  return (
    <>
      <div className="flex justify-between pt-8">
        <div className="flex flex-col w-1/2 border-l pl-4 border-neutral-700">
          <p className="text-neutral-400">Genres</p>
          <div className="flex gap-1">
            {genres.map((genre, index) => (
              <p key={genre.id} className="underline">
                {genre.name}
                {index == genres.length - 1 ? null : ","}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-1/2 border-l pl-4 border-neutral-700">
          <p className="text-neutral-400">Features</p>
          <div className="flex gap-1">
            {features.map((feature, index) => (
              <p key={feature.id} className="underline">
                {feature.name}
                {index == features.length - 1 ? null : ", "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Genres;
