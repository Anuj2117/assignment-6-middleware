// routes/about.js

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('About page');
});

export default router;
