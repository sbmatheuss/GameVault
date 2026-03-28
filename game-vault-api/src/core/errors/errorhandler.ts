import { Request, Response, NextFunction } from "express";
import { AppError } from "./appError";

const DEBUG = process.env.DEBUG;

export const errorHandler = (error: any, _req: Request, res: Response, _next: NextFunction) => {

    if (error instanceof AppError) {
      console.error(`[APPERROR] ${error.context ?? "APP"} -> ${error.message}`)
      
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }


  if (DEBUG) {
    console.error(`[UNEXPECTED] ${error.message}`, { stack: error.stack });
  } else {
    console.error(`[UNEXPECTED] ${error.message}`);
  }

  return res.status(500).json({
    status: "error",
    message: "Erro interno no servidor",
  });

}