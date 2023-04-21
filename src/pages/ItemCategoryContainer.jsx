import React from "react";
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Loader } from "../components/Loader/Loader";


export const ItemCategoryContainer = () => {

    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection)
        .then(products => {
            setItems(
                products.docs
                .map((doc) => ({ id: doc.id, ...doc.data() }))
                .filter(e => e.categoria === categoryId)

            )
        })
        .then(() => setLoading(false))
    }, [categoryId])

    return loading? (<Loader/>) : (
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
