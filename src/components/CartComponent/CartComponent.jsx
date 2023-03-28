import React from "react";
import { useState, useEffect } from 'react'
import "./CartComponent.css"
import data from '../../data/products.json'



export const CartComponent = () => {
    
    const [items, setItems] = useState([]);
    
    const productsJson = () => {
        setItems(data);
    } 
    
    useEffect(() => {
        productsJson();
    }, [])
    
    const filteredItems = items.filter(e => e.categoria === "Notebook")
    
    return(
        <div className="flexB">
            <div className="containerCart">
                {filteredItems.map(e =>
                    <div key={e.id} className="cartItem">
                        <div className="itemPrev">
                            <img className="cartImg" src={e.img}/>
                            <h4>{e.nombre}</h4>
                        </div>
                        <p>${e.precio}</p>
                    </div>
                )}
            </div>
        </div>
    )
}