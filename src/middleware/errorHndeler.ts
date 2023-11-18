import { NextFunction, Request, Response } from "express";

export const errorHandeler = (
    error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = res.statusCode !== 200 ? res.statusCode : 200;
  console.log('From error hnadeler')
  res.status(status).json({
    message: error.message,
  });
};
