"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "StaffPositions",
      [
        {
          id: 1,
          staff_id: 1,
          staff_title: "Lập trình viên Backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          staff_id: 1,
          staff_title: "Backend Team Leader",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          staff_id: 2,
          staff_title: "Seller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
