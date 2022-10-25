import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import "./cart.css";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="container-cart">
      {state.map((product, index) => {
        return (
          <div className="cart" key={index}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>

            <p>{product.quantity * product.price}$</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "increase", payload: product })}
              >
                +
              </button>

              <p>{product.quantity}</p>

              <button
                onClick={() => {
                  if (product.quantity > 1) {
                    dispatch({ type: "decrease", payload: product });
                  } else {
                    dispatch({ type: "remove", payload: product });
                  }
                }}
              >
                -
              </button>
            </div>
            <h1 onClick={() => dispatch({ type: "remove", payload: product })}>
              <FaRegTrashAlt className="remove" />
            </h1>
          </div>
        );
      })}

      {state.length > 0 && (
        <div className="total">
          <h2>Total : {total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
