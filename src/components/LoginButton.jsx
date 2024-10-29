// src/components/LoginButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/SessionProvider';

const LoginButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRoleLogin = (role) => {
    if (role === 'admin') {
      window.location.href = '/.auth/login/admin';
    } else if (role === 'customer') {
      const userData = { username: "customer123", password: "password123" }; // Mock data
      login(userData); // Save user data
      navigate('/customer-home'); // Navigate to customerHome
    }
  };

  return (
    <div>
      <h2>Login as:</h2>
      <button onClick={() => handleRoleLogin('admin')}>Login as Admin</button>
      <button onClick={() => handleRoleLogin('customer')}>Login as Customer</button>
    </div>
  );
};

export default LoginButton;
