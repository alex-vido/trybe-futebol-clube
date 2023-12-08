import { Router } from 'express';

import TeamRouter from './Team.router';

const router = Router();

router.use('/teams', TeamRouter);
router.use('/teams/:id', TeamRouter);

export default router;
