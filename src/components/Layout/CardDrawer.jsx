import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartContents from "../Cart/CartContents"; // Fix import name
const CardDrawer = ({ drawerOpen, toggleCartDrawer }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        toggleCartDrawer(); // Close the cart drawer
        navigate('/checkout'); // Navigate to checkout page
    };
    return (
        <>
            {/* Overlay background */}
            {drawerOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-40"
                    onClick={toggleCartDrawer}
                ></div>
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
                    drawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b flex-shrink-0">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button onClick={toggleCartDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                {/* Scrollable cart items */}
                <div className="flex-1 overflow-y-auto p-4">
                    <CartContents /> {/* Updated component name */}
                </div>

                {/* Footer with checkout button */}
                <div className="p-4 border-t flex-shrink-0">
                    <button 
                        onClick={handleCheckout}
                        className="w-full bg-[#3B0075] text-white py-2 rounded-lg font-semibold hover:bg-[#5200a3] transition"
                    >
                        Checkout
                    </button>
                    <span className="block text-xs  text-center text-gray-500 mt-2">
                        Shop With VividVendors - Coupons and Offers Applied!
                    </span>
                </div>
            </div>
        </>
    );
};

export default CardDrawer;
