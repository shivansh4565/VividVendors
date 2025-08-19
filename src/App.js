import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import ProductDetails from './components/Products/ProductDetails';
import CardDrawer from './components/Layout/CardDrawer';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartProvider>
            <div className="app">
                <ProductDetails toggleCart={toggleCart} />
                <CardDrawer drawerOpen={isCartOpen} toggleCartDrawer={toggleCart} />
            </div>
        </CartProvider>
    );
}

export default App;