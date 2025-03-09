'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert sample doctor data
    await queryInterface.bulkInsert('Doctors', [
      {
        doctorName: 'Dr. John Doe',
        image: 'john.jpg',
        specialization: 'Cardiology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        doctorName: 'Dr. Jane Smith',
        image: 'jane.jpg',
        specialization: 'Neurology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        doctorName: 'Dr. Alex Brown',
        image: 'alex.jpg',
        specialization: 'Pediatrics',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove all inserted sample data
    await queryInterface.bulkDelete('Doctors', null, {});
  }
};