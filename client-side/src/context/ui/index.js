import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [count, setCount] = useState(0);

  const value = {
    drawerOpen,
    setDrawerOpen,
    cart,
    setCart,
    showCart,
    setShowCart,
    count,
    setCount
  }

  return <UIContext.Provider value={value} >{children}</UIContext.Provider>
};
