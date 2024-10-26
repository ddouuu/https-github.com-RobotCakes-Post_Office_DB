import React from 'react';

const LoginButton = () => {
  const handleRoleLogin = (role) => {
    // Redirect to the login URL based on the selected role
    window.location.href = `/.auth/login/${role}`;
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
