import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

function SecondaryNav() {
  const options = [
    { id: 1, label: "Star Wars: Jedi Survivor", img: 'https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S2_1200x1600-fd090aecb23a065b29ea101939798edd?h=480&quality=medium&resize=1&w=360'},
    { id: 2, label: "God of War", img: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=480&quality=medium&resize=1&w=360'},
    { id: 3, label: "Redfall", img: 'https://cdn1.epicgames.com/offer/48e20c81667c4ff49c85dd79ac3a01b0/EGS_Redfall_ArkaneStudios_S2_1200x1600-2f567c0dbf7e69015b741fc9b52c8b91_1200x1600-2f567c0dbf7e69015b741fc9b52c8b91?h=480&quality=medium&resize=1&w=360'}
  ];

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // fetch the search result
    console.log('search', searchTerm);
  };

  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <span className="bg-neutral-800 flex items-center justify-center p-3 rounded-l-3xl">
            <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
          </span>
          <div className="search-container">
            <div className="search-inner">
              <input
                value={value}
                onChange={onChange}
                type="text"
                list="options"
                className="input-with-hint bg-neutral-800 rounded-r-3xl py-2 pr-4 placeholder:text-sm"
              />
              <div className="dropdown">
                {options
                  .filter(item => {
                    const searchTerm = value.toLowerCase();
                    const title = item.label.toLowerCase();
                    return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
                  })
                  .map((result) => (
                    <div key={result.id} onClick={() => {onSearch(value); onSearch(result.label);}}>
                    <div className="flex justify-between items-center  bg-neutral-800">
                      <img
                        src={result.img}
                        alt={result.label}
                        className="rounded w-8 h-8" // Adjust the width and height classes as desired
                      />
                      <span>{result.label}</span>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
            
          </div>
         
          <div className="flex pl-8 gap-4 text-neutral-400">
            <p>Discover</p>
            <p>Browse</p>
            <p>News</p>
          </div>
        </div>
        {/* <div className="flex gap-2 text-neutral-400">
          <p>Wishlist</p>
          <p>Cart</p>
        </div> */}
      </div>
    </div>
  );
}

export default SecondaryNav;
