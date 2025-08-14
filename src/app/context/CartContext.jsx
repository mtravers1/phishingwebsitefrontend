"use client";

import { createContext, useContext, useReducer } from "react";

// 1. Initial state for the cart
const initialState = {
  cartItems: [],
};

// 2. Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item is already in cart
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

// 3. Create Context
const CartContext = createContext();

// 4. Provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = product => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = id => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ cart: state.cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 5. Custom hook
export const useCart = () => useContext(CartContext);
