'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        serviceName: 'Consultation',
        description: 'Professional medical consultation services',
        image: 'consultation.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceName: 'Surgery',
        description: 'Expert surgical services for various conditions',
        image: 'surgery.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceName: 'Therapy',
        description: 'Comprehensive physical and mental therapy',
        image: 'therapy.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
