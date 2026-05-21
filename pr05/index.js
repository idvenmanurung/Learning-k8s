const express = require('express') 
const app = express() 
 
app.get('/', (req, res) => res.json({ message: 'Hello World' })) 
app.get('/health', (req, res) => res.json({ status: 'ok' })) 
 
const server = app.listen(3000, () => console.log('Running on port 3000')) 
 
process.on('SIGTERM', () => { 
  console.log('SIGTERM received, shutting down...') 
  server.close(() => { 
    console.log('Server closed') 
    process.exit(0) 
  }) 
}) 