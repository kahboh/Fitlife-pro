import { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back 💙</h1>

        <p>Sign in to continue your fitness journey.</p>

        <form>

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