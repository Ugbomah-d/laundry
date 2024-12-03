const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

// Test the connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the MySQL schema:', err);
        return;
    }
    console.log('Connected to the MySQL schema:', connection.config.database);
});



module.exports = connection;
