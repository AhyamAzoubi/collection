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
    <div className="row mx-3 my-3 position-relative ">
      {state.map((product, index) => {
        return (
          <div
            className="card my-2 mx-2 "
            style={{ width: "10rem" }}
            key={index}
          >
            <img
              className="img-top "
              style={{ height: "9rem", width: "9rem" }}
              src={product.image}
              alt=""
            />
            <div className="">
              <h5 className="card-title fs-6">{product.title}</h5>
              <p className="card-text text-center fs-4">
                {product.quantity * product.price}$
              </p>
              <div className="d-flex justify-content-evenly">
                <button
                  className="btn btn-outline-dark"
                  onClick={() =>
                    dispatch({ type: "increase", payload: product })
                  }
                >
                  +
                </button>

                <p>{product.quantity}</p>

                <button
                  className="btn btn-outline-dark"
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

              <h1
                className="text-center"
                onClick={() => dispatch({ type: "remove", payload: product })}
              >
                <FaRegTrashAlt className="remove " />
              </h1>
            </div>
          </div>
        );
      })}
      <hr />
      <div className="">
        {state.length > 0 && (
          <div className="total">
            <h2>Total : {total} $</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
