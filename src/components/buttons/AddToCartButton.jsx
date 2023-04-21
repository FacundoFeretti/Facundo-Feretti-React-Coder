import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context"; 
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const AddToCartButton = (props) => {
    
    const {itemCount, setItemCount} = useContext(CartContext)
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection)
        .then(products => {
            setData(
                products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            )
        })
    }, [])


     const addToCart = () =>{
        const existingProduct = itemCount.products.find(e => e.id === id);
        const existingIndex = itemCount.products.findIndex(e => e.id === id);
        const newItem = data.find(e => e.id === id)

        if(existingProduct){
            const updatedProducts = [...itemCount.products]; 
            updatedProducts[existingIndex].qty += 1;
            setItemCount({qtyItems: itemCount.qtyItems + 1, products: updatedProducts})
        } else {
            setItemCount({qtyItems: itemCount.qtyItems + 1, products: [...itemCount.products, {...newItem, qty: 1}]})
        }
        
    }
    
    return(
        <button onClick={addToCart} className="compra-btn btn">Agregar al carrito</button>
    )
}