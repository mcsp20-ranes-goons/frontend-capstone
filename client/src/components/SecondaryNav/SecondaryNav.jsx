import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, useContext } from "react";
import { AppContext } from "../../appContext";

function SecondaryNav() {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { wishlistItems, setWishlistItems } = useContext(AppContext);
  const { cartItems, setCartItems } = useContext(AppContext);

  const toggleWishlist = (product) => {
    const isProductInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (isProductInWishlist) {
      const updateWishlist = wishlistItems.filter(
        (item) => item.id !== product.id
      );
      setWishlistItems(updateWishlist);
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
    setWishlistOpen(!wishlistOpen);
  };

  const toggleCart = (product) => {
    const isProductInCart = cartItems.some(
      (item) => item.Price === product.Price
    );

    if (isProductInCart) {
      const updateCart = cartItems.filter(
        (item) => item.Price !== product.Price
      );
      setCartItems(updateCart);
    } else {
      setCartItems([...cartItems, product]);
    }
    setCartOpen(!cartOpen);
  };

  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <span className="bg-neutral-800 flex items-center justify-center p-3 rounded-l-3xl">
            <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
          </span>
          <input
            type="text"
            placeholder="Search store"
            className="bg-neutral-800 rounded-r-3xl py-2 pr-4 placeholder:text-sm"
          />
        </div>

        <div className="flex gap-2 text-neutral-400">
          <p>Discover</p>
          <p>Browse</p>
          <p>News</p>
        </div>
      </div>

      <div className="flex gap-2 text-neutral-400">
        <p onClick={toggleWishlist}>Wishlist</p>
        {wishlistOpen && (
          <ul>
            {wishlistItems.map((item) => (
              <li key={item.id}>{item.Title}</li>
            ))}
          </ul>
        )}
        <p onClick={toggleCart}> Cart </p>
        {cartOpen && (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.Title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SecondaryNav;
