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
    <div className="container ">
      {state.map((product, index) => {
        return (
          <div className="card mb-3" key={index}>
            <img className="card-img-top " src={product.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.quantity * product.price}$</p>

              <button
                className="btn btn-dark"
                onClick={() => dispatch({ type: "increase", payload: product })}
              >
                +
              </button>

              <p>{product.quantity}</p>

              <button
                className="btn btn-dark"
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

              <h1
                onClick={() => dispatch({ type: "remove", payload: product })}
              >
                <FaRegTrashAlt className="remove" />
              </h1>
            </div>
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
