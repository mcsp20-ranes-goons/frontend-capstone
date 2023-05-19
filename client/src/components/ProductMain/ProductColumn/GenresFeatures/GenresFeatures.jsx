import React, { useEffect, useState } from "react";
import { features } from "../../../../api/features";
import { genres } from "../../../../api/genres";

function Genres() {
  const [genresState, setgenresState] = useState([]);
  const [featuresState, setfeaturesState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await genres();
      console.log(response);
      setgenresState(response);
    };
    const fetchData2 = async () => {
      const response = await features();
      console.log(response);
      setfeaturesState(response);
    };
    fetchData();
    fetchData2();
  }, []);

  return (
    <div>
      <div className="flex flex-row pt-10">
        <div className="border border-gray-700"></div>
        <div className="flex flex-col justify-left ml-5 text-gray-300">
          Genres
          <div className="flex flex-row justify-left w-[400px] h-[35]">
            <a className="underline text-white" href="#">
              Action
            </a>
            <span>,&nbsp;</span>
            <a className="underline text-white" href="#">
              Adventure
            </a>
          </div>
        </div>
        <div className="border border-gray-700 items-center h-[20]"></div>

        <div className="border border-gray-700"></div>
        <div className="flex flex-col justify-left ml-5 text-gray-300">
          Features
          <div className="flex flex-row justify-left w-[400px] h-[35]">
            <a className="underline text-white" href="#">
              Single Player
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  {
    genresState &&
      genresState.length > 0 &&
      genresState.map((item) => {
        return (
          <>
            {getEntries(item).map(([key, value]) => {
              return (
                <div key={item.id + key} className="flex flex-col">
                  <span className="text-neutral-400">
                    {capitalizeFirstLetter(key)}
                  </span>
                  <span>{value}</span>
                </div>
              );
            })}
          </>
        );
      });
  }
}
export default Genres;
