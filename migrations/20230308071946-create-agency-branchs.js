"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AgencyBranchs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      agency_branch_name: {
        type: Sequelize.STRING,
      },
      agency_branch_phone: {
        type: Sequelize.STRING,
      },
      agency_branch_CN_code: {
        type: Sequelize.STRING,
      },
      agency_branch_address: {
        type: Sequelize.STRING,
      },
      agency_branch_area: {
        type: Sequelize.STRING,
      },
      agency_branch_expiration_date: {
        type: Sequelize.STRING,
      },
      agency_branch_status: {
        type: Sequelize.STRING,
      },
      isDefaultCN: {
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
    await queryInterface.dropTable("AgencyBranchs");
  },
};
