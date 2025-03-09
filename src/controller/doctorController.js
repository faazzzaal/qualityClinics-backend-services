// controller/doctorController.js

const { Doctor } = require('../models'); // Ensure this path is correct

exports.getAllDoctors = async (req, res) => {
  try {
    // Fetch all doctors from the database
    const doctors = await Doctor.findAll();
    
    // Return the fetched data as JSON
    res.status(200).json({
      success: true,
      data: doctors
    });
  } catch (error) {
    console.error('Error fetching doctors from database:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch doctor details from database'
    });
  }
};
