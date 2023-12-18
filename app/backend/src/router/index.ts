import { Router } from 'express';

import TeamRouter from './Team.router';
import LoginRouter from './Login.router';

const router = Router();

router.use('/teams', TeamRouter);
router.use('/login', LoginRouter);

export default router;
