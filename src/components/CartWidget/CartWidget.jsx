import "./CartWidget.css"
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <li ><Link id="cartElement" to="/cart"><div id="cartCount">2</div><i className="fa-solid fa-cart-shopping"></i></Link></li>
    )
}



