import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  // React's memory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // This function runs when the Login button is clicked
  function handleLogin(event) {
    // Stop the page from refreshing
    event.preventDefault();

    // Check if email is empty
    if (email === "") {
      setError("Please enter your email.");
      return;
    }

    // Check if password is empty
    if (password === "") {
      setError("Please enter your password.");
      return;
    }

    // Clear any previous error
    setError("");

    // For now, just print the values
    console.log("Login Successful!");
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back 💙</h1>

        <p>Sign in to continue your fitness journey.</p>

        {/* Display the error message */}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;