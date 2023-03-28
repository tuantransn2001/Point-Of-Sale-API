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
      "Staffs",
      [
        {
          id: 1,
          staff_address: "Phường Linh Trung Quận Thủ Đức",
          staff_status: "Đang làm việc",
          staff_birthday: new Date(),
          note_about_staff: "Nhân viên mới",
          staff_gender: "male",
          staff_region: "Hà Nội",
          staff_commune: "Quận Tân Bình",
          isAllowViewImportNWholesalePrice: false,
          isAllowViewShippingPrice: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          staff_address: "Phường 3 Quận Bình Thạnh",
          staff_status: "Đang làm việc",
          staff_birthday: new Date(),
          note_about_staff: "Nhân viên cũ",
          staff_gender: "male",
          staff_region: "Hà Nội",
          staff_commune: "Quận Tân Bình",
          isAllowViewImportNWholesalePrice: false,
          isAllowViewShippingPrice: false,
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
