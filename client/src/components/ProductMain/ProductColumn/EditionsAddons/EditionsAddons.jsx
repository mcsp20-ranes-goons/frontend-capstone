import React from "react";
import "./EditionsAddons.css";

function EditionsAddons() {
  //useEffect to fetch EditionsAddons data from API
  return (
    <div className="editionsAddonsContainer">
      <div className="editionsContainer">
        <span className="titleName">Editions</span>
        <div className="edition">
          <div className="upper">
            <img
              className="image"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-s1-2560x1440-9475e1c6c933.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Base Game Edition Image"
            />
            <div>
              <div className="titleContainer">
                <div className="type">BASE</div>
                <div className="name">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor">
                    STAR WARS Jedi: Survivor™ Standard Edition
                  </a>
                </div>
              </div>
              <div className="description">
                <p>
                  The story of Cal Kestis continues in Star Wars Jedi:
                  Survivor™, a third-person galaxy-spanning action-adventure
                  game from Respawn Entertainment and Lucasfilm Games.
                </p>
              </div>
            </div>
          </div>
          <div className="lower">
            <div className="price">$69.99</div>
            <div className="addTo">ADD TO CART</div>
            <div className="addTo">ADD TO WISHLIST</div>
          </div>
        </div>
        <div className="edition">
          <div className="upper">
            <img
              className="image"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivordeluxeedition-respawn-editions-s1-2560x1440-d3eeb6db2b78.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Deluxe Edition Image"
            />
            <div>
              <div className="titleContainer">
                <div className="type">EDITION</div>
                <div className="name">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor--deluxe-edition">
                    STAR WARS Jedi: Survivor™ Deluxe Edition
                  </a>
                </div>
              </div>
              <div className="description">
                <p>
                  Unlock exclusive cosmetic items inspired by Han Solo™ and Luke
                  Skywalker™, as seen in STAR WARS: A New Hope, with Star Wars
                  Jedi: Survivor Deluxe Edition*!
                </p>
              </div>
            </div>
          </div>
          <div className="lower">
            <div className="price">$69.99</div>
            <div className="addTo">ADD TO CART</div>
            <div className="addTo">ADD TO WISHLIST</div>
          </div>
        </div>
      </div>
      <div className="addonsContainer">
        <span className="titleName">Add-Ons</span>
        <div className="add-on">
          <div className="upper">
            <img
              className="image"
              src="https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorDeluxeUpgrade_Respawn_DLC_S1_2560x1440-7c9c63aa494f15aa1d277540e60306bf?h=270&quality=medium&resize=1&w=480"
              alt="Base Game Edition Image"
            />
            <div>
              <div className="titleContainer">
                <div className="type">ADD-ON</div>
                <div className="name">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor--deluxe-upgrade">
                    STAR WARS Jedi: Survivor™ - Deluxe Upgrade
                  </a>
                </div>
              </div>
              <div className="description">
                <p>Upgrade to unlock exclusive cosmetic items!</p>
              </div>
            </div>
          </div>
          <div className="lower">
            <div className="price">$69.99</div>
            <div className="addTo">ADD TO CART</div>
            <div className="addTo">ADD TO WISHLIST</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditionsAddons;
