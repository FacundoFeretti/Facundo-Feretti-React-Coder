import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ItemListContainerPage } from '../pages/ItemListContainerPage'
import { NavBar } from "../components/NavBar/NavBar";
import { CartComponentPage } from "../pages/CartComponentPage"
import { ItemCategoryContainer } from '../pages/ItemCategoryContainer'
import { ItemDetailsContainer } from '../pages/ItemDetailsContainer/ItemDetailsContainer'


export const MainRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainerPage/>}/>
                <Route exact path="/cart" element={<CartComponentPage/>}/>
                <Route exact path="/category/:categoryId" element={<ItemCategoryContainer/>}/>  
                <Route exact path="/item/:id" element={<ItemDetailsContainer/>} />              
            </Routes>
        </Router>
    )
}
