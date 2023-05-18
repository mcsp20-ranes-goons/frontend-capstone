import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Hint } from 'react-autocomplete-hint';

function SecondaryNav() {
  const options = [
    { id: 1, label: "Star Wars: Jedi Survivor" },
    { id: '2', label: "God of War" },
    { id: 3, label: "God of War" }
  ];

  const [text, setText] = useState('');

  const getMatch = (value) => {
    if (value && options) {
      return options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      );
    }
    return [];
  };

  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <span className="bg-neutral-800 flex items-center justify-center p-3 rounded-l-3xl">
            <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
          </span>
          <br />
          <br />
          <br />
          <Hint options={options} allowTabFill>
            <input
              className="input-with-hint bg-neutral-800 rounded-r-3xl py-2 pr-4 placeholder:text-sm"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Hint>
        </div>

        <div className="flex gap-2 text-neutral-400">
          <p>Discover</p>
          <p>Browse</p>
          <p>News</p>
        </div>
      </div>

      <div className="flex gap-2 text-neutral-400">
        <p>Wishlist</p>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default SecondaryNav;


