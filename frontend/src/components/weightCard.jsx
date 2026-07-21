import { useState } from "react";
import "./WeightCard.css";

function WeightCard({ height, currentWeight, goalWeight }) {

  // React's memory
  const [weight, setWeight] = useState(currentWeight);
  const [newWeight, setNewWeight] = useState("");
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("Never");
 
  // Runs when the Save button is clicked
  function handleSave() {

    // Check if the input is empty
    if (newWeight === "") {
      setError("Please enter your new weight.");
      return;
    }

    // Check if the weight is valid
    if (newWeight <= 0) {
      setError("Weight must be greater than 0.");
      return;
    }

    // Clear any previous error
    setError("");

    // Update the official weight
    setWeight(newWeight);

    const response = await fetch("http://localhost:3000/api/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    height,
    weight: newWeight,
    goalWeight,
  }),
});

const data = await response.json();

console.log(data);

    // Clear the input box
    setNewWeight("");
  }

  return (
    <div className="weight-card">

      <h2>📊 Body Statistics</h2>

      <p>Height: {height} cm</p>

      <p>Current Weight: {weight} kg</p>

      <p>Goal Weight: {goalWeight} kg</p>

      {error && <p className="error-message">{error}</p>}

      <input
        type="number"
        placeholder="Enter your new weight"
        value={newWeight}
        onChange={(e) => setNewWeight(e.target.value)}
      />

      <button onClick={handleSave}>
        Save
      </button>

    </div>
  );
}

export default WeightCard;