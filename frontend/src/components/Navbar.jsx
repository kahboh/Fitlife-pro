import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🏋🏾‍♀️ FitLife Pro</h2>

      <div>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;