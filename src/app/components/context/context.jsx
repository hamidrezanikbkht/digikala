"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 
  const [api, setApi] = useState(null);
  const [adad, setAdad] = useState(0); 
  const [searchText, setSearchText] = useState("");

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id)); 
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]); 
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        adad,
        setAdad,
        api,
        setApi,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
