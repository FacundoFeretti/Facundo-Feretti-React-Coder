import React, { useContext } from "react"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../context"
import "./NavBar.css"
import "../CartWidget/CartWidget"


export const NavBar = () => {    
    
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)
    
    const handleChange = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <nav id="navbar">
            <Link id='title' to="/">FacuTech</Link>
            <ul id="navMenu">
                <CartWidget />
                <li className="itemMenu"><Link to='/'>Productos</Link></li>
                <li className="itemMenu"><Link to='/category/Notebook'>Notebooks</Link></li>
                <li className="itemMenu"><Link to='/category/Auriculares'>Auriculares</Link></li>
                <li className="itemMenu"><Link to='/category/SmartTv'>Smart Tv</Link></li>
                <li className="itemMenu"><Link to='/category/Celular'>Celular</Link></li>
                <li className="itemMenu"><Link to='/about'>Sobre Nosotros</Link></li>
                <li className="itemMenu"><Link to='/contact'>Contacto</Link></li>
                <li><button onClick={handleChange}>{isDarkMode? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}</button></li>
            </ul>
        </nav>
    )
}