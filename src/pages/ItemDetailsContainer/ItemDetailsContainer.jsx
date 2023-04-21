import React from "react";
import './ItemDetailsContainer.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore";
import { AddToCartButton } from "../../components/buttons/AddToCartButton";
import { Loader } from "../../components/Loader/Loader";

export const ItemDetailsContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef)
        .then(product => {
            if(!product.exists()){
                console.log("no existe el producto")
            }
            setItem({id: product.id, ...product.data()});
        })
        .catch(err => console.log(err))
        .then(() => setLoading(false))
    }, []);

    return loading ? (<Loader/>) : (
        <div className="containerMaster">
            <div className="detailContainer">
                <img className="detailImg" src={item.img} alt="" />
                <div className="detail">
                    <h4>{item.nombre}</h4>
                    <p>{item.categoria}</p>
                    <p>{item.id}</p>
                    <p>${item.precio}</p>
                </div>
                <AddToCartButton />
                <Link to={`/`}  className='btnAtras btn'>Atras</Link>
            </div>
        </div> 
    )
}