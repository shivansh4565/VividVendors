import React from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleOrderSuccess = (details) => {
    console.log("✅ Payment successful:", details);
    clearCart();
    navigate("/order-confirmation", { state: { orderId: details.id } });
  };

  const handleCOD = () => {
    console.log("✅ COD Order Placed");
    clearCart();
    navigate("/order-confirmation", { state: { orderId: "COD-" + Date.now() } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h2 className="text-2xl font-bold mb-4">🛒 Your cart is empty</h2>
        <Link to="/collection" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Cart items summary */}
  
      {/* Order total */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-semibold">Total</h3>
        <p className="text-xl font-bold">₹{getCartTotal()}</p>
      </div>

      {/* Customer details form */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
        <form className="grid gap-4 md:grid-cols-2">
          <input type="text" placeholder="Full Name" className="border p-3 rounded w-full" required />
          <input type="email" placeholder="Email Address" className="border p-3 rounded w-full" required />
          <input type="text" placeholder="Phone Number" className="border p-3 rounded w-full" required />
          <input type="text" placeholder="City" className="border p-3 rounded w-full" required />
          <textarea placeholder="Full Address" className="border p-3 rounded w-full md:col-span-2" rows="3" required />
        </form>
      </div>

      {/* Payment Options */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Payment</h3>

        {/* PayPal Button */}
        <PayPalButtons
          style={{ layout: "vertical", color: "blue", shape: "pill", label: "pay" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Your Order",
                  amount: {
                    value: (getCartTotal() / 83).toFixed(2), // Convert ₹ → USD approx
                    currency_code: "USD",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            handleOrderSuccess(details);
          }}
          onError={(err) => {
            console.error("❌ PayPal Checkout Error:", err);
          }}
        />

        {/* COD Button */}
        <button
          onClick={handleCOD}
          className="mt-4 w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Cash on Delivery
        </button>
      </div>
    </div>
  );
};

export default Checkout;
