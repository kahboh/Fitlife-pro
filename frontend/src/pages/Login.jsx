import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {

    setError("");

    try {

      const response = await fetch("http://localhost:3000/api/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),

      });

      const data = await response.json();

      if (!response.ok) {

        setError(data.message);
        return;

      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("email", data.user.email);

      alert(data.message);

      console.log(data);

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      setError("Unable to connect to the server.");

    }

  }

  return (

    <div className="login-container">

      <h1>🔐 Login</h1>

      <p>Welcome back to FitLife Pro.</p>

      {error && <p className="error-message">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );

}

export default Login;