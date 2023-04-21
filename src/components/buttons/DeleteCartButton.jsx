import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../../context"; 

export const DeleteCartButton = () =>{

    const {setItemCount} = useContext(CartContext)

    const deleteCart = () => {
        setItemCount({qtyItems: 0, products: []})
    };

    return(
        <button className="compra-btn btn" onClick={deleteCart}>Eliminar productos</button>
    )

};