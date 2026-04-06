import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize express
const app = express();

// Connect to Database
try {
    await connectDB()
} catch (error) {
    console.error('Failed to connect to database:', error)
}

// Middlewares
app.use(cors());


// Routes
app.get("/", (req, res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5005;
    app.listen(PORT, ()=>{
        console.log(`Server is running at ${PORT}`)
    })
}

export default app