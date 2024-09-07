// index.js

import express from 'express';
import logger from './middleware.js'; 

import homeRoute from './routes/home.js'; 
import aboutRoute from './routes/about.js';
import contactRoute from './routes/contact.js';

const app = express();

// Use the logger middleware
app.use(logger);

// Define routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
