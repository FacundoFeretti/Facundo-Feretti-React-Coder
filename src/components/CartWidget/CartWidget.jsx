import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context"
import "./CartWidget.css"

export const CartWidget = () => {
    
    const { itemCount } = useContext(CartContext)

    return (
        <li ><Link id="cartElement" to="/cart"><div id="cartCount">{itemCount.qtyItems}</div><i className="fa-solid fa-cart-shopping"></i></Link></li>
    )
}



