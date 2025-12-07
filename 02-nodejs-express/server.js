const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.json({
    status: 'RUNNING',
    project: '02-nodejs-express',
    message: 'GHOST SHELL Express API Test',
    environment: {
      NODE_ENV: process.env.NODE_ENV || 'production',
      PORT: PORT,
      customEnv: process.env.CUSTOM_VAR || 'not set'
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`✅ Express server running on port ${PORT}`);
});
