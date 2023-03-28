"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Staffs.hasMany(models.StaffPositions, {
        foreignKey: "staff_id",
      });
    }
  }
  Staffs.init(
    {
      staff_status: DataTypes.STRING,
      staff_birthday: DataTypes.DATE,
      note_about_staff: DataTypes.STRING,
      staff_gender: DataTypes.STRING,
      staff_region: DataTypes.STRING,
      staff_commune: DataTypes.STRING,
      staff_address: DataTypes.STRING,
      isAllowViewImportNWholesalePrice: DataTypes.BOOLEAN,
      isAllowViewShippingPrice: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Staffs",
    }
  );
  return Staffs;
};
