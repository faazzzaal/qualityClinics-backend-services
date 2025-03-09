// controller/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');


//========GET ALL USERS=======
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch user details"
      });
    }
  };

// =======REGISTER USER=======
exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, phNumber, iqamaNumber, password, age, gender } = req.body;

    // Validate that required fields are provided
    if (!fullName || !email || !phNumber || !iqamaNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Required fields: fullName, email, phNumber, iqamaNumber, and password."
      });
    }

    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "A user with this email already exists."
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user. Age and gender are optional.
    const newUser = await User.create({
      fullName,
      email,
      phNumber,
      iqamaNumber,
      password: hashedPassword,
      age: age || null,
      gender: gender || null
    });

    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to register user."
    });
  }
};

// =======GET USER BY ID=======
exports.getUserById = async (req, res) => {
    try {
      const { id } = req.params; // Extract the user ID from the URL
      const user = await User.findByPk(id); // Fetch user by primary key (ID)
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch user details"
      });
    }
  };

//=======UPDATE USER=======

// Function to update user details
exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params; // Get the user ID from the URL
      const { fullName, email, phNumber, iqamaNumber, password, age, gender } = req.body;
  
      // Find the user by ID
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
  
      // Create an object with the fields to update.
      // Only update if the field is provided in the request body.
      const updatedData = {};
      if (fullName) updatedData.fullName = fullName;
      if (email) updatedData.email = email;
      if (phNumber) updatedData.phNumber = phNumber;
      if (iqamaNumber) updatedData.iqamaNumber = iqamaNumber;
      if (age !== undefined) updatedData.age = age;
      if (gender) updatedData.gender = gender;
  
      // If a new password is provided, hash it before updating
      if (password) {
        updatedData.password = await bcrypt.hash(password, 10);
      }
  
      // Update the user record with the new data
      await user.update(updatedData);
  
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
      });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update user"
      });
    }
  };