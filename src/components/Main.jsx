// Main.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./formSections/header";
import { Carrusel } from "./formSections/carrusel/carrusel";
import { Productos } from "./formSections/productos";
import { Footer } from "./formSections/footer";
import { CartProvider } from "./formSections/cart/cartContext"; 


export const Main = () => {
  return (
    <CartProvider>
      <div style={{ background: "linear-gradient(to bottom, #fce4ec, #ffffff)" }}>
        <Header />
        <Carrusel />
        <Productos />
       
        <Footer />
      </div>
    </CartProvider>
  );
};
