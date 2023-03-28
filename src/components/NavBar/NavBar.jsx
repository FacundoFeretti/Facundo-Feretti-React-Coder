import "./NavBar.css"
import "../CartWidget/CartWidget"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'


export const NavBar = () => {    
    return (
        <nav id="navbar">
            <a id="title">FacuTech</a>
            <ul id="navMenu">
                <CartWidget />
                <li className="itemMenu"><Link to='/'>Productos</Link></li>
                <li className="itemMenu"><Link to='/about'>Sobre Nosotros</Link></li>
                <li className="itemMenu"><Link to=''>Contacto</Link></li>
            </ul>
        </nav>
    )
}