import { createContext, useState } from "react";

export const WishlistContext = createContext();
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exist = prevWishlist.find(
        (item) => item.id === product.id
      );
      if (exist) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};