const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from GHOST SHELL!',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>GHOST SHELL API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
        }
        h1 { color: #667eea; }
        .endpoint {
          background: #f3f4f6;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>🚀 GHOST SHELL - Test API</h1>
      <p>Server is running successfully!</p>
      <h2>Available Endpoints:</h2>
      <div class="endpoint">GET /health - Health check</div>
      <div class="endpoint">GET /api/hello - Hello message</div>
      <p>Server Time: ${new Date().toISOString()}</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
