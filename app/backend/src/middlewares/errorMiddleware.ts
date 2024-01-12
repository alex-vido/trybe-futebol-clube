import { NextFunction, Request, Response } from 'express';
import StatusCodeError from './StatusCodeError.Middleware';

function errorMiddleware(
  error: Error & Partial<StatusCodeError>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode = error.statusCode ?? 500;
  const message = error.message ?? 'Internal Server Error';
  return res.status(statusCode).json({ message });
}
export default errorMiddleware;
