import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import NotAuthorizatedError from '../utils/NotAuthorizatedError';

const notFoundToken = 'Token not found';
const invalidToken = 'Token must be a valid token';

export default class TokenValidation {
  static validate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new NotAuthorizatedError(notFoundToken);

    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer' || !token) throw new NotAuthorizatedError(invalidToken);

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET ?? 'jwt_secret');

      if (!user) throw new NotAuthorizatedError(invalidToken);

      if (req.method === 'GET') {
        req.body = user;
      }
      next();
    } catch (error) {
      throw new NotAuthorizatedError(invalidToken);
    }
  }
}
