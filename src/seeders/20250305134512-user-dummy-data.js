'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Generate a hashed password for our dummy users
    const hashedPassword = await bcrypt.hash('secretpassword', 10);
    
    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'John Doe',
        email: 'john@example.com',
        phNumber: '1234567890',
        iqamaNumber: 'IQAMA12345',
        password: hashedPassword,
        age: 30,
        gender: 'Male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Jane Smith',
        email: 'jane@example.com',
        phNumber: '0987654321',
        iqamaNumber: 'IQAMA54321',
        password: hashedPassword,
        age: 28,
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};