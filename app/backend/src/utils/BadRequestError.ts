import StatusCodeError from '../middlewares/StatusCodeError.Middleware';

export default class BadRequestError extends StatusCodeError {
  constructor(message:string) {
    super(message, 400);
  }
}
