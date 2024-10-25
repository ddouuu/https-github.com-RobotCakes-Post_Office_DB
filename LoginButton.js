
import React from 'react';

const LoginButton = () => {
  const handleLogin = (provider) => {
    window.location.href = `/.auth/login/${provider}`;
  };

  return (
    <div>
      <button onClick={() => handleLogin('github')}>Login with GitHub</button>
      <button onClick={() => handleLogin('twitter')}>Login with Twitter</button>
    </div>
  );
};

export default LoginButton;
