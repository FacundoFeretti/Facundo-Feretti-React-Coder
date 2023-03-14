import "./NavBar.css"
import "../CartWidget/CartWidget"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {    
    return (
        <nav id="navbar">
            <a id="title">FacuTech</a>
            <ul id="navMenu">
                <CartWidget />
                <li className="itemMenu"><a href="#">Productos</a></li>
                <li className="itemMenu"><a href="#">Sobre Nosotros</a></li>
                <li className="itemMenu"><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}