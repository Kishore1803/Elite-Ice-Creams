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
        alert(`${product.name} is already in your wishlist!`);
        return prevWishlist;
      }
      alert(`${product.name} added to wishlist!`);
      return [...prevWishlist, product];
    });
  };
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );

    alert("Item removed from wishlist!");
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