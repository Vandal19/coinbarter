import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

  // states for mobile menu drawer open and close
  const [drawerOpen, setDrawerOpen] = useState(false);

  // states for search bar
  const [showSearchBox, setShowSearchBox] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox
  }

  return <UIContext.Provider value={value} >{children}</UIContext.Provider>
};
