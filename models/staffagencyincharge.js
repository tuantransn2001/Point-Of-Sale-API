"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StaffAgencyInCharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StaffAgencyInCharge.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      staff_id: DataTypes.INTEGER,
      agency_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StaffAgencyInCharge",
    }
  );
  return StaffAgencyInCharge;
};
