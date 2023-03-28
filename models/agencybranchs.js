"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AgencyBranchs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  AgencyBranchs.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      agency_branch_name: {
        type: DataTypes.STRING,
      },
      agency_branch_phone: {
        type: DataTypes.STRING,
      },
      agency_branch_CN_code: {
        type: DataTypes.STRING,
      },
      agency_branch_address: {
        type: DataTypes.STRING,
      },
      agency_branch_area: {
        type: DataTypes.STRING,
      },
      agency_branch_expiration_date: {
        type: DataTypes.STRING,
      },
      agency_branch_status: {
        type: DataTypes.STRING,
      },
      isDefaultCN: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "AgencyBranchs",
    }
  );
  return AgencyBranchs;
};
