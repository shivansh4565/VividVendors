import React, { createContext, useContext, useState } from 'react';
/* eslint-disable react-refresh/only-export-components */

// Provide default shape to avoid undefined errors
const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartTotal: () => 0
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, selectedColor, selectedSize) => {
    setCartItems(prev => {
      // Check if the same product + options already exists
      const existingIndex = prev.findIndex(
        item =>
          item.productId === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingIndex !== -1) {
        // If exists, update quantity
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      // Otherwise add as a new cart item
      return [
        ...prev,
        {
          cartItemId: crypto.randomUUID(), // safer than Date.now()
          productId: product.id,
          ...product,
          quantity,
          selectedColor,
          selectedSize
        }
      ];
    });
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
