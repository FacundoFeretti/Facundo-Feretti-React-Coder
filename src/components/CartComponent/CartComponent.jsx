import React, {useContext} from "react";
import {DeleteCartButton} from "../buttons/DeleteCartButton"
import "./CartComponent.css"
import { CartContext } from "../../context";
import { Link } from "react-router-dom";

export const CartComponent = () => {
    
    const {itemCount} = useContext(CartContext)
    
    const totalPrice = itemCount.products.reduce((acumulador, product) => acumulador + (product.precio * product.qty), 0);

    return(
        <div className="flexB">
            <div className="containerCart">
                {itemCount.products.map(e =>
                    <div key={e.id} className="cartItem">
                        <div className="itemPrev">
                            <img className="cartImg" src={e.img}/>
                            <h4>{e.nombre}</h4>
                            <h4>x{e.qty}</h4>
                        </div>
                        <p>${e.precio * e.qty}</p>
                    </div>
                )}
                <p className="totalPrice">$ {totalPrice}</p>
                <Link className="btn compra-btn" to='/checkout'>Pagar</Link>
                <DeleteCartButton/>
            </div>
        </div>
    )
}