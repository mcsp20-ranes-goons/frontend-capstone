import { createContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <AppContext.Provider
      value={{
        signedIn,
        setSignedIn,
        cartItems,
        setCartItems,
        wishlistItems,
        setWishlistItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
