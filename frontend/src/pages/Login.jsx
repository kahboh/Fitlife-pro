import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back 💙</h1>

        <p>Sign in to continue your fitness journey.</p>

        <form>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
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