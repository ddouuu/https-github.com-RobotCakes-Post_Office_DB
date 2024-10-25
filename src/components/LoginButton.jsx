import React from 'react';

const LoginButton = () => {
  const handleProviderLogin = (provider) => { // Renamed function
    window.location.href = `/.auth/login/${provider}`;
  };

  return (
    <div>
      <button onClick={() => handleProviderLogin('github')}>Login with GitHub</button>
      <button onClick={() => handleProviderLogin('twitter')}>Login with Twitter</button>
    </div>
  );
};

export default LoginButton;
