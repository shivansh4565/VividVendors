import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { CartProvider } from './context/CartContext.jsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "YOUR_PAYPAL_CLIENT_ID", // 🔑 Replace with your real client ID
  currency: "USD", // PayPal supports USD, EUR, etc. (check your account)
  intent: "capture",
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <CartProvider>
        <App />
      </CartProvider>
    </PayPalScriptProvider>
  </StrictMode>
);
