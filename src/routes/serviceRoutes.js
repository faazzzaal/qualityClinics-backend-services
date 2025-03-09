// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const serviceController = require('../controller/serviceController'); // note: folder is 'controller'

// Define a GET endpoint to retrieve service details
router.get('/services', serviceController.getAllServices);

module.exports = router;