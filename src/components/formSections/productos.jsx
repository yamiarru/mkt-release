import React, { useContext, useState, useEffect } from 'react';
import azulMarino from "../assets/productos/azulMarino.png";
import blanco from "../assets/productos/blanco.png";
import fucsia from "../assets/productos/fucsia.png";
import verdeEsmeralda from "../assets/productos/verdeEsmeralda.png";
import verdePastel from "../assets/productos/verdePastel.png";
import amarilloPastel from "../assets/productos/amarilloPastel.png";
import combo6 from "../assets/productos/combo6.png";
import { CartContext } from "../formSections/cart/cartContext";

export const Productos = () => {
  const { addItemToCart } = useContext(CartContext);
  const [notification, setNotification] = useState(false);

  const handleAddToCart = (product) => {
    addItemToCart(product);

    // Guardar en localStorage
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Mostrar notificación temporal
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  useEffect(() => {
    // Asegúrate de que localStorage tenga algo cuando se carga la página
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <section className="container my-5">
      {notification && (
        <div className="alert alert-success" role="alert">
          Producto agregado al carrito!
        </div>
      )}
      <div className="titulo">
        <h1 className="neon-text">Scrunchies!</h1>
      </div>
      <div className="row">
        {[
          { img: azulMarino, title: "Individual Azul Marino" },
          { img: blanco, title: "Individual Blanco" },
          { img: fucsia, title: "Individual Fucsia" },
          { img: verdeEsmeralda, title: "Individual Verde Esmeralda" },
          { img: verdePastel, title: "Individual Verde Pastel" },
          { img: amarilloPastel, title: "Individual Amarillo Pastel" },
          { img: combo6, title: "Combo 6 Colores" },
        ].map((producto, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <img
                src={producto.img}
                className="card-img-top"
                alt={producto.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body" style={{ flex: 1 }}>
                <h5 className="card-title">{producto.title}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart({ name: producto.title })}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
