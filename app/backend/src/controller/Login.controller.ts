import { Request, Response } from 'express';
import LoginService from '../services/Login.service';

export default class LoginController {
  constructor(private service = new LoginService()) {
  }

  public async login(req: Request, res: Response) {
    const token = await this.service.login(req.body);
    if (!token) return res.status(401).json({ message: 'Invalid email or password' });
    return res.status(200).json({ token });
  }

  static getRole = (req: Request, res: Response) => {
    const { role } = req.body;
    return res.status(200).json({ role });
  };
}
