import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
