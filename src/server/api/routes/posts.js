// Dependencies
import express from 'express';

// Express Router
const router = express.Router();

router.get('/', (req, res) => res.send('Hola!'));

export default router;
