import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const contextAuth = createContext();

function AuthContext({ children }) {
  const [auth, setAuth] = useState({
    id: "",
    name: "",
    logged: false,
  });

  return (
    <contextAuth.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
}

export default AuthContext;
