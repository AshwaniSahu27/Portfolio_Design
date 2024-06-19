import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeData, setThemeData] = useState({
    isDark: true,
    isOpen: false,
    colorStatus:false,
    color: "pink",
  });

  return (
  <themeContext.Provider value={{ themeData, setThemeData }}>
    {children}
  </themeContext.Provider>
  )
};

export const useTheme = () => useContext(themeContext)