import React, {useContext} from "react";
import { ThemeContext } from "../context";

export const MainLayout = ({ children }) => {

    const {isDarkMode} = useContext(ThemeContext)

    const mainStyles = {
        backgroundColor: isDarkMode ? "#1b4332" : "#74c69d",
        color: isDarkMode ? "white" : "black",
        minHeight: "100vh"
    }

    return (
        <div style={mainStyles}>{children}</div>
    )
}