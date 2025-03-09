// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController.js');

// Define a POST endpoint for user registration
router.post('/users/register', userController.registerUser);

router.get('/users', userController.getAllUsers);

// New endpoint to get a specified user's details by ID
router.get('/users/:id', userController.getUserById);

// New endpoint to update user details
router.put('/users/:id', userController.updateUser);

module.exports = router;