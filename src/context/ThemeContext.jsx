import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === "true" || false);

   useEffect(() =>{
    localStorage.setItem('isDarkMode', isDarkMode)
   }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
};