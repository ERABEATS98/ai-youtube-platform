import express from 'express';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

router.get('/profile/:userId', (req, res) => res.json({ message: 'Get user profile' }));
router.put('/profile', verifyToken, (req, res) => res.json({ message: 'Update user profile' }));

export default router;
