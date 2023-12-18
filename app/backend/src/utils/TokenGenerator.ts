import * as jwt from 'jsonwebtoken';
import TokenInterface from '../Interfaces/TokenInterface';

export default class JWTTokenGenerator {
  static generateToken(payload: TokenInterface): string {
    const secret = process.env.JWT_SECRET ?? 'jwt_secret';
    const tokenExpiration = { expiresIn: '8h' };
    return jwt.sign(payload, secret, tokenExpiration);
  }
}
