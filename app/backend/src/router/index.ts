import { Router } from 'express';

import TeamRouter from './Team.router';
import LoginRouter from './Login.router';
import MatchRouter from './Match.router';

const router = Router();

router.use('/teams', TeamRouter);
router.use('/login', LoginRouter);
router.use('/matches', MatchRouter);

export default router;
