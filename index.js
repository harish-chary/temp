// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route for the root
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define another route
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
