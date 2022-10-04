import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  // states to authenticate user
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
};
