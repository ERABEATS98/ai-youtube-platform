import express from 'express';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

router.get('/video/:videoId', (req, res) => res.json({ message: 'Get video comments' }));
router.post('/', verifyToken, (req, res) => res.json({ message: 'Create comment' }));

export default router;
