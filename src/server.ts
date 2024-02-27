import express, { NextFunction, Request, Response } from "express";
import { loggingMiddleware } from "./utils/logger";
import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Use the logging middleware
app.use(loggingMiddleware);

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use(routes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});

// Log the URL for easy access
console.log(`URL: http://localhost:${PORT}`);

// Make the URL clickable
console.log("\x1b[36m%s\x1b[0m", `URL: http://localhost:${PORT}`);
