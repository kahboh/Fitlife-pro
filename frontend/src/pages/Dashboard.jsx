import { useState, useEffect } from "react";

function Dashboard() {

    const [exercise, setExercise] = useState("");
    const [duration, setDuration] = useState("");
    const [calories, setCalories] = useState("");

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {

        async function fetchWorkouts() {

            const user = JSON.parse(localStorage.getItem("user"));

            const response = await fetch(

                `http://localhost:3000/api/workouts/${user.id}`

            );

            const data = await response.json();

            setWorkouts(data);

        }

        fetchWorkouts();

    }, []);

    async function saveWorkout() {

        const user = JSON.parse(localStorage.getItem("user"));

        const response = await fetch(

            "http://localhost:3000/api/workouts",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    user_id: user.id,

                    exercise,

                    duration,

                    calories

                })

            }

        );

        const data = await response.json();

        alert(data.message);

        setExercise("");
        setDuration("");
        setCalories("");

    }

    return (

        <div className="dashboard">

            <h1>🏋🏾‍♀️ FitLife Pro Dashboard</h1>

            <h2>Add Workout</h2>

            <input

                type="text"

                placeholder="Exercise"

                value={exercise}

                onChange={(e) => setExercise(e.target.value)}

            />

            <input

                type="number"

                placeholder="Duration (minutes)"

                value={duration}

                onChange={(e) => setDuration(e.target.value)}

            />

            <input

                type="number"

                placeholder="Calories Burned"

                value={calories}

                onChange={(e) => setCalories(e.target.value)}

            />

            <button onClick={saveWorkout}>

                Save Workout

            </button>

            <h2>My Workouts</h2>

            {workouts.map((workout) => (

                <div

                    key={workout.id}

                    style={{

                        border: "1px solid #ccc",

                        padding: "10px",

                        marginTop: "10px",

                        borderRadius: "8px"

                    }}

                >

                    <h3>{workout.exercise}</h3>

                    <p>

                        Duration: {workout.duration} minutes

                    </p>

                    <p>

                        Calories: {workout.calories}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default Dashboard;