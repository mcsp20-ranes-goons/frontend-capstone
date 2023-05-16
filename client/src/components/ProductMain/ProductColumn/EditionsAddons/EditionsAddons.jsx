import { useState, useEffect } from "react";

function EditionsAddons() {
  const [editions, setEditions] = useState([]);
  const [addOns, setAddOns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/editions/1")
      .then((result) => result.json())
      .then((data) => setEditions(data));

    fetch("http://localhost:3001/api/add-ons/1")
      .then((result) => result.json())
      .then((data) => setAddOns(data));
  }, []);
  
  let display = (item) => { 
    let type = "EDITION";
    if (!item.name.toLowerCase().includes("edition")) {
      type = "ADD-ON"
    }
    return (
    <div className="flex flex-col mb-5">
      <div className="flex bg-neutral-800 border-b border-neutral-700">
        <img
          className="w-72 h-40"
          src={item.image}
          alt={item.name}
        />
        <div>
          <div className="flex flex-row">
            <div className="flex flex-row justify-center items-center py-2 m-3 px-4 bg-neutral-700 rounded-sm text-sm">
              {item.name.toLowerCase().includes("standard") ? "BASE GAME" : type}
            </div>
            <div className="flex items-center m-2">
              <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor">
                {item.name}
              </a>
            </div>
          </div>
          <div className="flex items-center px-3">
            <p className="text-neutral-400">
              {item.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center p-5 gap-3 bg-neutral-800">
        <div className="text-lg">${item.price}</div>
        <button className="flex justify-center items-center px-12 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">
          ADD TO CART
        </button>
        <button className="flex justify-center items-center px-8 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  )};


  return (
    <div>
      <div>
        <h1 className="text-xl my-5">Editions</h1>
        {editions.map((edition) => display(edition))}
      </div>
      <div>
        <h1 className="text-xl my-5">Add-Ons</h1>
        {addOns.map((addon) => display(addon))}
      </div>
    </div>
  );
}

export default EditionsAddons;
