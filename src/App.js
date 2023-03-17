import React from 'react';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi proyecto React..." msg="Pre-entrega N°1"/>
    </div>
  );
}

export default App;
