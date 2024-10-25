import { useState, useEffect } from "react";
import { useAuth } from "./auth/SessionProvider";
import LoginButton from "./components/LoginButton";
import reactLogo from "./assets/react.svg";
import "./styles/App.css"; // Ensure this path is correct

function App() {
  const [count, setCount] = useState(0);
  const [ip, setIp] = useState("");
  const { user, login, logout } = useAuth();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch((error) => console.error("Error fetching IP:", error));
  }, []);

  const handleLogin = () => {
    const userData = { name: "John Doe", email: "john@example.com" };
    login(userData);
  };

  return (
    <div className="app-container">
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Post Office</h1>
      </header>

      {/* Centered text */}
      <div className="centered-text">
        <p>cool it red 😎</p>
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <div className="auth-section">
        {user ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <>
            <button onClick={handleLogin}>Mock Login</button>
            <LoginButton />
          </>
        )}
      </div>

      <div className="ip-section">
        <p>Your IP address is: {ip ? ip : "Loading..."}</p>
      </div>

      <footer className="read-the-docs">
        Click on the Vite and React logos to learn more
      </footer>
    </div>
  );
}

export default App;
