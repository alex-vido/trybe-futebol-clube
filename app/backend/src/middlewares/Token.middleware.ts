import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const notFoundToken = 'Token not found';
const invalidToken = 'Token must be a valid token';

export default class TokenValidation {
  static validate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: notFoundToken });

    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer' || !token) return res.status(401).json({ message: invalidToken });

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET ?? 'jwt_secret');

      if (!user) return res.status(401).json({ message: invalidToken });

      if (req.method === 'GET') {
        req.body = user;
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: invalidToken });
    }
  }
}
