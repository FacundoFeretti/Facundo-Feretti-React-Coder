import React from "react";
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/products.json'
import { AddToCartButton } from "../components/buttons/AddToCartButton";


export const ItemCategoryContainer = () => {

    const { categoryId } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        let filtrado = data.filter(e => e.categoria === categoryId)
        setItems(filtrado);
    }, [categoryId])

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
