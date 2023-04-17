import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBRYY5xwR0XxOiQ3AqRv2XBuVdl3waYMYs",
  authDomain: "ecommerce-react-coder-bb48e.firebaseapp.com",
  projectId: "ecommerce-react-coder-bb48e",
  storageBucket: "ecommerce-react-coder-bb48e.appspot.com",
  messagingSenderId: "302320337413",
  appId: "1:302320337413:web:c5334396facd3713cd926c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

