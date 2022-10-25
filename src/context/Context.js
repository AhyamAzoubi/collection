import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        const tempstate = state.filter(
          (product) => action.payload.id === product.id
        );
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "increase":
        const tempstate1 = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
        return tempstate1;
      case "decrease":
        const tempstate2 = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
        return tempstate2;
      case "remove":
        const tempstate3 = state.filter(
          (product) => product.id !== action.payload.id
        );
        return tempstate3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};

export default Context;
