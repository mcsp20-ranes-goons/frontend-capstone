function EditionsAddons() {
  //useEffect to fetch EditionsAddons data from API
  return (
    <div className="m-10">
      <div>
        <span className="text-xl ml-5">Editions</span>
        <div className="flex flex-col m-5">
          <div className="flex w-[865px] h-[160px] bg-neutral-800 border-b border-neutral-700">
            <img
              className="w-[285px] h-[160px]"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-s1-2560x1440-9475e1c6c933.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Base Game Edition Image"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center p-[10px] m-[10px] w-[90px] h-[35] bg-neutral-700 rounded-sm">BASE</div>
                <div className="flex items-center m-[10px]">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor">
                    STAR WARS Jedi: Survivor™ Standard Edition
                  </a>
                </div>
              </div>
              <div className="flex items-center m-[10px]">
                <p>
                  The story of Cal Kestis continues in Star Wars Jedi:
                  Survivor™, a third-person galaxy-spanning action-adventure
                  game from Respawn Entertainment and Lucasfilm Games.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-[20px] gap-[10px] w-[865px] h-[90px] bg-neutral-800">
            <div className="w-[60px] h-[22px] text-lg">$69.99</div>
            <div className="flex justify-center items-center w-[200px] h-[50px] border border-neutral-700 rounded-sm">ADD TO CART</div>
            <div className="flex justify-center items-center w-[200px] h-[50px] border border-neutral-700 rounded-sm">ADD TO WISHLIST</div>
          </div>
        </div>
        <div className="flex flex-col m-5">
          <div className="flex w-[865px] h-[160px] bg-neutral-800 border-b border-neutral-700">
            <img
              className="w-[285px] h-[160px]"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivordeluxeedition-respawn-editions-s1-2560x1440-d3eeb6db2b78.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Deluxe Edition Image"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center p-[10px] m-[10px] w-[90px] h-[35] bg-neutral-700 rounded-sm">EDITION</div>
                <div className="flex items-center m-[10px]">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor--deluxe-edition">
                    STAR WARS Jedi: Survivor™ Deluxe Edition
                  </a>
                </div>
              </div>
              <div className="flex items-center m-[10px]">
                <p>
                  Unlock exclusive cosmetic items inspired by Han Solo™ and Luke
                  Skywalker™, as seen in STAR WARS: A New Hope, with Star Wars
                  Jedi: Survivor Deluxe Edition*!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-[20px] gap-[10px] w-[865px] h-[90px] bg-neutral-800">
            <div className="w-[60px] h-[22px] text-lg">$69.99</div>
            <div className="flex justify-center items-center w-[200px] h-[50px] border border-neutral-700 rounded-sm">ADD TO CART</div>
            <div className="flex justify-center items-center w-[200px] h-[50px] border border-neutral-700 rounded-sm">ADD TO WISHLIST</div>
          </div>
        </div>
      </div>
      <div>
        <span className="text-xl m-5">Add-Ons</span>
        <div className="flex flex-col m-5">
          <div className="flex w-[865px] h-[160px] bg-neutral-800 border-b border-neutral-700">
            <img
              className="w-[285px] h-[160px]"
              src="https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorDeluxeUpgrade_Respawn_DLC_S1_2560x1440-7c9c63aa494f15aa1d277540e60306bf?h=270&quality=medium&resize=1&w=480"
              alt="Deluxe Upgrade Image"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center p-[10px] m-[10px] w-[90px] h-[35] bg-neutral-700 rounded-sm">ADD-ON</div>
                <div className="flex items-center m-[10px]">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor--deluxe-upgrade">
                    STAR WARS Jedi: Survivor™ - Deluxe Upgrade
                  </a>
                </div>
              </div>
              <div className="flex items-center m-[10px]">
                <p>Upgrade to unlock exclusive cosmetic items!</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-[20px] gap-[10px] w-[865px] h-[90px] bg-neutral-800">
            <div className="w-[60px] h-[22px] text-lg">$69.99</div>
            <div className="flex justify-center items-center w-[200px] h-[50px] border border-neutral-700 rounded-sm">ADD TO CART</div>
            <div className="flex justify-center items-center w-[200px] h-[50px] border border-neutral-700 rounded-sm">ADD TO WISHLIST</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditionsAddons;
