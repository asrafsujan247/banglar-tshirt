import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = <h5>Thanks for buying from us</h5>;
  }
  return (
    <div
      className={cart.length < 2 ? "blue" : cart.length < 4 ? "green" : "red"}
    >
      <h2>Order Summary: {cart.length}</h2>
      {cart.length > 5 ? (
        <h2>ELite boroloxx customer</h2>
      ) : (
        <div>{message}</div>
      )}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 7 && (
        <h3> Congratulations!!! Use have own a coupon worth 20k</h3>
      )}
    </div>
  );
};

export default Cart;
