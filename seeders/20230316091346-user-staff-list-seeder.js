"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "userStaffLists",
      [
        {
          id: 1,
          staff_id: 1,
          user_id: 1,
          user_staff_list_note: "Be carefully",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          staff_id: 2,
          user_id: 2,
          user_staff_list_note: "Be carefully",
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
