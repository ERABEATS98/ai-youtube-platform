import express from 'express';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Get all videos' }));
router.post('/', verifyToken, (req, res) => res.json({ message: 'Create video' }));
router.get('/:id', (req, res) => res.json({ message: 'Get video by ID' }));

export default router;
