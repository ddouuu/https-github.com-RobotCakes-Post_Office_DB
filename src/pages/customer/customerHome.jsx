// src/pages/customer/customerHome.jsx
import React from 'react';
import { useAuth } from '../../auth/SessionProvider';

const CustomerHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.username}!</h1>
      <p>Your password is: {user?.password}</p>
      <p>This is the customer dashboard.</p>
    </div>
  );
};

export default CustomerHome;
