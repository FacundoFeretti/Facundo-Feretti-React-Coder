import React from "react";
import './ItemDetailsContainer.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../../data/products.json'

export const ItemDetailsContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
        let result = data.find(e => e.id === id)
        setItem(result)
    }, []);

    return(
        <div className="containerMaster">
            <div className="detailContainer">
                <img className="detailImg" src={item.img} alt="" />
                <div className="detail">
                    <h4>{item.nombre}</h4>
                    <p>{item.categoria}</p>
                    <p>{item.id}</p>
                    <p>${item.precio}</p>
                </div>
                <Link to={`/`}  className='btnAtras btn'>Atras</Link>
            </div>
        </div> 
    )
}