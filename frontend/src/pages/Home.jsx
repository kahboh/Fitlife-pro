import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="title">🏋🏾‍♀️ FitLife Pro</h1>

        <h2 className="subtitle">
          Your Health, Your Journey Starts Here
        </h2>

        <p className="description">
          Track your workouts, meals, water intake, weight, and fitness goals
          all in one place.
        </p>

        <div className="buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;