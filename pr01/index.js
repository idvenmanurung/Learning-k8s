const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Idven App</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 350px;
        }

        h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        p {
          opacity: 0.8;
          margin-bottom: 20px;
        }

        .btn {
          display: inline-block;
          padding: 12px 20px;
          background: white;
          color: #764ba2;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .status {
          margin-top: 20px;
          font-size: 14px;
          opacity: 0.7;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Hello Idvennn</h1>
        <p>Your Express app is running successfully</p>

        <a href="/health" class="btn">
          Check Health
        </a>

        <div class="status">
          Server running on port ${PORT}
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('🛑 Shutting down gracefully...');
  server.close(() => process.exit(0));
});