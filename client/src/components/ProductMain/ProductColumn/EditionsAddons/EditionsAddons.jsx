import "./EditionsAddons.css";

class Template {
  constructor(image, name, description, price) {

  }
}

function EditionsAddons() {
  //useEffect to fetch EditionsAddons data from API
  return (
    <div className="editionsAddonsContainer">
      <div className="editionsContainer">
        <span className="titleName">Editions</span>
        <div className="edition">
          <div className="editionUpper">
            <img
              className="baseGameImg"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-s1-2560x1440-9475e1c6c933.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Base Game Edition Image"
            />
            <div>
              <div className="titleContainer">
                <div className="type">BASE</div>
                <div className="name">EDITION NAME</div>
              </div>
              <div className="description">description</div>
            </div>
          </div>
          <div className="editionLower">
            <div className="price">$69.99</div>
            <div className="addTo">ADD TO CART</div>
            <div className="addTo">ADD TO WISHLIST</div>
          </div>
        </div>
      </div>
      <div className="addonsContainer">Add-Ons</div>
    </div>
  );
}

export default EditionsAddons;
