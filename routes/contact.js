// routes/contact.js

import { Router } from 'express';
const router = Router();

router.post('/', (req, res) => {
  res.send('Contact form submitted');
});

export default router;
