import React from 'react';
import ReactDOM from 'react-dom/client';
 import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import { CartProvider } from './Context/Cart';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
      
    <BrowserRouter>
    <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
   
    
  </React.StrictMode>
);