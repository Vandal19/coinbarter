import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

  // states for mobile menu drawer open and close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [showFav, setShowFav] = useState(false);

  // states for search bar
  const [showSearchBox, setShowSearchBox] = useState(false);

  const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(false)

  const value = {
    drawerOpen,
    setDrawerOpen,
    cart,
    setCart,
    showCart,
    setShowCart,
    showSearchBox,
    setShowSearchBox,
    showFav,
    setShowFav,
    anchor,
    setAnchor,
    open, setOpen
  }

  return <UIContext.Provider value={value} >{children}</UIContext.Provider>
};
