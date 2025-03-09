// index.js
const express = require('express');
const app = express();
require('dotenv').config();

// Middleware to parse JSON requests
app.use(express.json());

// Import role routes
const roleRoutes = require('./routes/roleRoutes');

// Mount the role routes on the '/api' path
// The GET endpoint will be available at: http://localhost:3000/api/roles
app.use('/api', roleRoutes);
app.use('/api', doctorRoutes);

// Default home route to verify the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Role API');
});

// Catch-all route for unmatched paths (404 Not Found)
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Start the server
const PORT = process.env.PORT_LOCAL || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
