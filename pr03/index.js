const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// koneksi mysql
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

// connect database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }

  console.log('Connected to MySQL');
});

// route utama
app.get('/', (req, res) => {
  res.json({ message: 'API Running' });
});

// health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// test database
app.get('/db-test', (req, res) => {
  db.query('SELECT NOW() AS now', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(result[0]);
  });
});

// jalanin server
app.listen(3000, () => {
  console.log('Running on port 3000');
});