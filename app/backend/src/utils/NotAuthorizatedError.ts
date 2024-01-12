import StatusCodeError from '../middlewares/StatusCodeError.Middleware';

export default class NotAuthorizatedError extends StatusCodeError {
  constructor(message:string) {
    super(message, 401);
  }
}
