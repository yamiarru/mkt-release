import React, { useContext } from "react";
import { CartContext } from "../cart/cartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, clearCart, removeFromCart, updateQuantity } =
    useContext(CartContext);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(index, newQuantity); // Actualiza la cantidad en el contexto
    }
  };

  return (
    <div className="cart">
      <h4>Carrito de Compras</h4>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(index, event)}
                  min="0"
                />
                <button onClick={() => removeFromCart(index)}>X</button>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <button onClick={clearCart} style={{ marginRight: "10px" }}>
              Vaciar Carrito
            </button>
            <button>Seguir Comprando</button>
          </div>
        </div>
      )}
    </div>
  );
};
