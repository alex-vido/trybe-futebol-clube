import { Router } from 'express';

import TeamRouter from './Team.router';

const router = Router();

router.use('/teams', TeamRouter);

export default router;
