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
      "Customers",
      [
        {
          id: 1,
          staff_id: 1,
          staff_in_charge_note: "Be carefull to change data!",
          customer_status: "Đang giao dịch",
          tags: "Lazada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          staff_id: 2,
          staff_in_charge_note: "Be carefully",
          customer_status: "Đang giao dịch",
          tags: "Shopee",
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
