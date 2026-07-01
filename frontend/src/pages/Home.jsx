import "../Home.css";
import Navbar from "../components/Navbar";

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
          Track your workouts, meals, water intake, and fitness goals all in one place.
        </p>

        <button>Login</button>

        <button>Register</button>
      </div>
    </>
  );
}

export default Home;