import React from "react";
import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import data from '../../data/products.json'
import { Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore"


export const ItemListContainer = () =>{

    const [items, setItems] = useState([]);

    const productsJson = () => {
        setItems(data);
    } 

    useEffect(() => {
        productsJson();
    }, [])

    return(
        <div className="row">
            {items.map(e =>
                <div key={e.id} className="col-lg-3 justify-center">
                    <div className="card" style={{width: "18rem"}}>
                      <img src={e.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{e.nombre}</h5>
                            <p className="card-text">${e.precio}</p>
                            <Link to={`/item/${e.id}`} id={e.id} className="compra-btn btn">Detalles</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}