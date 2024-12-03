const express = require('express');
const db = require('./database/cloud'); // Import database connection
const router = require('./router/router');

const app = express();
app.use(express.json());


// Correct Order: Define routes before handling non-existing routes
app.use('/', router);

// Handle 404 for non-existent routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Route to fetch all users from the schema's table
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM customers'; // Adjust 'users' to your table name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
