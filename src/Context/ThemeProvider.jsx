import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
