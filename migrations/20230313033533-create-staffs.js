"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Staffs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      staff_status: { type: Sequelize.STRING },
      staff_birthday: { type: Sequelize.DATE },
      note_about_staff: { type: Sequelize.STRING },
      staff_gender: { type: Sequelize.STRING },
      staff_region: { type: Sequelize.STRING },
      staff_commune: { type: Sequelize.STRING },
      staff_address: { type: Sequelize.STRING },
      isAllowViewImportNWholesalePrice: {
        type: Sequelize.BOOLEAN,
      },
      isAllowViewShippingPrice: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Staffs");
  },
};
