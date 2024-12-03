
const express = require('express');
const router = express.Router();
const db = require('../database/cloud');

// Define a route
router.get('/', (req, res) => {
    res.send('Users API is working!');
});

router.get('/list', (req, res) => {
  const query = 'SELECT * FROM users'; // SQL query to fetch all users

  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching users:', err);
          res.status(500).json({ error: 'Database error' });
      } else {
          res.json(results);
      }
  });
});


module.exports = router;
