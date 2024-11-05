import dotenv from "dotenv";
import connectDB from './config/db.js'
import { app } from './app.js'

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Connect to MongoDB
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("App encountered an error before listening:", error);
      process.exit(1); // Exit process if there's an app-level error before listening
    });

    // Start the server
    const PORT = process.env.PORT || 4200;
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection failed! Error:", error.message);
    console.error("Stack Trace:", error.stack); // Logs the stack trace for deeper debugging
    process.exit(1); // Exit process if the database connection fails
  });
