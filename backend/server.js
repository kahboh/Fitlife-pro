const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = "fitlifepro_secret_key";

// ========================================
// Register User
// ========================================
app.post("/api/register", async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
            [name, email, hashedPassword]
        );

        res.json({
            message: "User registered successfully!"
        });

    } catch (error) {

        console.error("Database Error:", error);

        if (error.code === "23505") {
            return res.status(400).json({
                message: "Email already exists."
            });
        }

        res.status(500).json({
            message: "Something went wrong."
        });

    }

});

// ========================================
// Login User
// ========================================
app.post("/api/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {

            return res.status(400).json({
                message: "Invalid email or password."
            });

        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {

            return res.status(400).json({
                message: "Invalid email or password."
            });

        }

        const token = jwt.sign(

            {
                id: user.id,
                name: user.name,
                email: user.email
            },

            SECRET_KEY,

            {
                expiresIn: "1h"
            }

        );

        res.json({

            message: "Login successful!",

            token,

            user: {

                id: user.id,
                name: user.name,
                email: user.email

            }

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Something went wrong."
        });

    }

});

// ========================================
// Save Workout
// ========================================
app.post("/api/workouts", async (req, res) => {

    const { user_id, exercise, duration, calories } = req.body;

    try {

        await pool.query(

            `INSERT INTO workouts
            (user_id, exercise, duration, calories)
            VALUES ($1, $2, $3, $4)`,

            [user_id, exercise, duration, calories]

        );

        res.json({

            message: "Workout saved successfully!"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Unable to save workout."

        });

    }

});

// ========================================
// Get User Workouts
// ========================================
app.get("/api/workouts/:userId", async (req, res) => {

    const { userId } = req.params;

    try {

        const result = await pool.query(

            `SELECT *
             FROM workouts
             WHERE user_id = $1
             ORDER BY id DESC`,

            [userId]

        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Unable to retrieve workouts."

        });

    }

});

// ========================================
// Test Route
// ========================================
app.get("/", (req, res) => {

    res.send("FitLife Pro Backend is running!");

});

// ========================================
// Start Server
// ========================================
app.listen(3000, () => {

    console.log("🚀 Server is running on port 3000");

});