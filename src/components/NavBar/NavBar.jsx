import "./NavBar.css"
import "../CartWidget/CartWidget"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'


export const NavBar = () => {    
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
            </ul>
        </nav>
    )
}