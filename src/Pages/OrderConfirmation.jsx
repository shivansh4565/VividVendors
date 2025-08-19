import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Order Confirmed!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What's Next?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                You'll receive an email confirmation shortly
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Your order will be processed within 24 hours
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                You'll get tracking information once shipped
              </li>
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/profile"
              className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-gray-700 transition-colors"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
