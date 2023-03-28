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
      "UserCustomerLists",
      [
        {
          id: 1,
          customer_id: 1,
          user_id: 3,
          user_customer_list_note: "Created by staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          customer_id: 2,
          user_id: 4,
          user_customer_list_note: "Created by staff",
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
