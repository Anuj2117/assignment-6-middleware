// middleware/middleware.js

const logger = (req, res, next) => {
    const start = Date.now(); // Corrected from Data.now() to Date.now()
    const { method, url } = req;
    const timestamp = new Date().toISOString(); // Corrected from new Data() to new Date()
  
    console.log(`[${method}] ${timestamp} ${url}`); // Added spaces for readability
  
    res.on('finish', () => {
      const duration = Date.now() - start; // Corrected from Data.now() to Date.now()
      console.log(`Request processing time: ${duration}ms`);
    });
  
    next();
  };
  
  export default logger;
  