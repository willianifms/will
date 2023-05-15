'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [{
      nome: 'will'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};