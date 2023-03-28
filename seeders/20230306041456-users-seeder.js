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
      "Users",
      [
        {
          id: 1,
          user_name: "Trần Thái Tuấn",
          user_type: "admin",
          user_phone: "0987546325",
          user_email: "admin@gmail.com",
          user_password: "mhkadmin@123",
          user_code: "SK12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_name: "Nhân viên A",
          user_phone: "0364754962",
          user_email: "staf@gmail.com",
          user_password: "staff@123",
          user_type: "staff",
          user_code: "SK14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          user_name: "Khách hàng A",
          user_type: "customer",
          user_phone: "0361257895",
          user_email: "customer1@gmail.com",
          user_code: "SK13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          user_name: "Khách hàng B",
          user_type: "customer",
          user_phone: "0315469785",
          user_email: "customer2@gmail.com",
          user_code: "SK15",
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
