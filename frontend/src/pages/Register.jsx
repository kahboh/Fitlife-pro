import { useState } from "react";

function Register() {

  // React's memory
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Runs when the Register button is clicked
  async function handleRegister() {

    alert("Register button clicked!");
    console.log("✅ Step 1: Button clicked");

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      console.log("❌ Step 2: A field is empty");
      setError("Please fill in all fields.");
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      console.log("❌ Step 3: Passwords do not match");
      setError("Passwords do not match.");
      return;
    }

    console.log("✅ Step 4: Validation passed");

    // Clear previous errors
    setError("");

    try {

      console.log("✅ Step 5: Sending request to backend");

      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      console.log("✅ Step 6: Response received");
      console.log("Status:", response.status);

      const data = await response.json();

      console.log("✅ Step 7: Response data");
      console.log(data);

    } catch (error) {

      console.error("❌ Fetch Error:");
      console.error(error);

    }
  }

  return (
    <div className="register-container">

      <h1>📝 Register TEST</h1>

      <p>Create your FitLife Pro account.</p>

      {error && <p className="error-message">{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>
  );
}

export default Register;