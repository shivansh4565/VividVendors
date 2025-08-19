import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContents = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="space-y-4">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                <img
                  src={item.images[0].url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.selectedColor} • Size {item.selectedSize}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <span className="sr-only">Remove item</span>×
              </button>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span>Total:</span>
              <span className="font-bold">${getCartTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#3B0075] text-white py-2 rounded-lg font-semibold hover:bg-[#5200a3] transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContents;
