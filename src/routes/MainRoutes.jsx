import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ItemListContainerPage } from '../pages/ItemListContainerPage'
import { NavBar } from "../components/NavBar/NavBar";
import { CartComponentPage } from "../pages/CartComponentPage"
import { ItemCategoryContainer } from '../pages/ItemCategoryContainer'
import { ItemDetailsContainer } from '../pages/ItemDetailsContainer/ItemDetailsContainer'
import { Checkout } from '../pages/CheckOut';


export const MainRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainerPage/>}/>
                <Route exact path="/cart" element={<CartComponentPage/>}/>
                <Route exact path="/category/:categoryId" element={<ItemCategoryContainer/>}/>  
                <Route exact path="/item/:id" element={<ItemDetailsContainer/>} /> 
                <Route exact path="/checkout" element={<Checkout/>} />              
            </Routes>
        </Router>
    )
}
