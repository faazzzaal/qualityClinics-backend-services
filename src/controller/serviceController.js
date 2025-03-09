// controller/serviceController.js
const { Service } = require('../models'); // Ensure the path is correct

// Controller function to get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json({
      success: true,
      data: services
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service details'
    });
  }
};