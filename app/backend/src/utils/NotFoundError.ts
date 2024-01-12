import StatusCodeError from '../middlewares/StatusCodeError.Middleware';

export default class NotFoundError extends StatusCodeError {
  constructor(message:string) {
    super(message, 404);
  }
}
