// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController.js'); // folder is 'controller'

// Define a GET endpoint to retrieve doctor details
router.get('/doctors', doctorController.getAllDoctors);

module.exports = router;
