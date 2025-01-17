import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import colors from "colors";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();

  console.log(`Server running on port ${PORT}`);
});
