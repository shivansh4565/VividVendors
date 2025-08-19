import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';   // ✅ import cart context
import UserLayout from './components/Layout/UserLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Collectionpage from './Pages/Collectionpage';
import CollectionWomen from './Pages/CollectionWomen';
import CollectionPlant from './Pages/CollectionPlant';
import PlantAccessories from './Pages/PlantAccessories';
import Checkout from './components/Cart/Checkout';
import OrderConfirmation from './Pages/OrderConfirmation';

const App = () => {
  return (
    <CartProvider>   {/* ✅ Wrap entire app with CartProvider */}
      <BrowserRouter>
        <Routes>
          {/* Parent route for user layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="collection" element={<Collectionpage />} />
            <Route path="women" element={<CollectionWomen />} />
            <Route path="plants" element={<CollectionPlant />} />
            <Route path="accessories" element={<PlantAccessories />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
          </Route>

          {/* Other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
