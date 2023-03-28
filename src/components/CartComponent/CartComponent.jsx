import React from "react";
import { useState, useEffect } from 'react'
import "./CartComponent.css"
import data from '../../data/products.json'



export const CartComponent = () => {
    
    const [items, setItems] = useState([]);
    
    const productsJson = () => {
        let filtrado = data.filter(e => e.categoria === "Notebook")
        setItems(filtrado);
    } 
    
    useEffect(() => {
        productsJson();
    }, [])
        
    return(
        <div className="flexB">
            <div className="containerCart">
                {items.map(e =>
                    <div key={e.id} className="cartItem">
                        <div className="itemPrev">
                            <img className="cartImg" src={e.img}/>
                            <h4>{e.nombre}</h4>
                        </div>
                        <p>${e.precio}</p>
                    </div>
                )}
                <p className="totalPrice">Total: $99999</p>
            </div>
        </div>
    )
}