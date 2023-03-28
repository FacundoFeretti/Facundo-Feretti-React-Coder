import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ItemListContainerPage } from '../pages/ItemListContainerPage'
import { NavBar } from "../components/NavBar/NavBar";
import { CartComponentPage } from "../pages/CartComponentPage"
import { Footer } from "../components/Footer/Footer"


export const MainRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainerPage/>}/>
                <Route exact path="/cart" element={<CartComponentPage/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
    )
}
