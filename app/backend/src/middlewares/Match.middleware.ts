import { NextFunction, Request, Response } from 'express';
import IMatchCreate from '../Interfaces/ICreateMatch';
import UnprocessableContentError from '../utils/UnprocessableContentError';

export default class Match {
  static validate(req: Request, res: Response, next: NextFunction) {
    const { homeTeamId, awayTeamId }:IMatchCreate = req.body;
    if (homeTeamId === awayTeamId) {
      throw new UnprocessableContentError(
        'It is not possible to create a match with two equal teams',
      );
    }

    next();
  }
}
