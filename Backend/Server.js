import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import itemRoutes from "./routes/item.routes.js";

dotenv.config(); // Loads environment variables from .env file

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Allows app to parse JSON requests

// Use item routes
app.use("/api/items", itemRoutes);

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
