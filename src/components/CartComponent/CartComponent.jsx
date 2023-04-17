import React, {useContext} from "react";
import { useState, useEffect } from 'react'
import "./CartComponent.css"
import data from '../../data/products.json'
import { CartContext } from "../../context";


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
            </div>
        </div>
    )
}