import StatusCodeError from '../middlewares/StatusCodeError.Middleware';

export default class UnprocessableContentError extends StatusCodeError {
  constructor(message:string) {
    super(message, 422);
  }
}
