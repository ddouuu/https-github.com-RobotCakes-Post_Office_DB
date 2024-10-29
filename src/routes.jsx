// src/routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Products from './pages/Products';
import CustomerHome from './pages/customer/customerHome'; // Import the Customer Home

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route path="store" element={<Products />} />
      <Route path="customer-home" element={<CustomerHome />} /> {/* Existing route */}
      <Route path="/customer" element={<CustomerHome />} /> {/* Add this route for customer login */}
    </Routes>
  );
}

export default App;
