import morgan from "morgan";
import { Request, Response, NextFunction } from "express";

// Create a logging middleware function
export const loggingMiddleware = morgan("dev");
