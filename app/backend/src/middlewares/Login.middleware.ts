import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import LoginInterface from '../Interfaces/LoginInterface';
import NotAuthorizatedError from '../utils/NotAuthorizatedError';
import BadRequestError from '../utils/BadRequestError';

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const LoginExistValues = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default class LoginValidation {
  static validateFields(login: LoginInterface): boolean {
    const { error } = LoginExistValues.validate(login);
    return !!error;
  }

  static validateValues(login: LoginInterface): boolean {
    const { error } = LoginSchema.validate(login);
    return !!error;
  }

  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const LoginError = LoginValidation.validateFields(req.body);
    if (LoginError) throw new BadRequestError('All fields must be filled');

    const LoginValuesError = LoginValidation.validateValues(req.body);
    if (LoginValuesError) throw new NotAuthorizatedError('Invalid email or password');

    next();
  }
}
