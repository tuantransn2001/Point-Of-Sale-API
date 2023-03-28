"use strict";

/** @type {import('sequelize-cli').Migration} */
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
      "CustomerAddressLists",
      [
        {
          id: 1,
          customer_id: 1,
          customer_region: "Hồ Chí Minh",
          customer_commune: "Quận Bình Tân",
          customer_address: "Phường 4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          customer_id: 1,
          customer_region: "Hồ Chí Minh",
          customer_commune: "Quận Bình Thạnh",
          customer_address: "Phường 12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          customer_id: 2,
          customer_region: "Hồ Chí Minh",
          customer_commune: "Quận Gò Vấp",
          customer_address: "Phường 11",
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
