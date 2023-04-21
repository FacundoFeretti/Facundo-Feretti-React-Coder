import React, {useContext} from "react";
import { ThemeContext } from "../context";

export const MainLayout = ({ children }) => {

    const {isDarkMode} = useContext(ThemeContext)

    const mainStyles = {
        backgroundColor: isDarkMode ? "#30343F" : "#F0F7F4",
        color: isDarkMode ? "white" : "black",
        minHeight: "100vh"
    }

    return (
        <div style={mainStyles}>{children}</div>
    )
}