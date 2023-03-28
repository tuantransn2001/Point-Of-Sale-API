"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StaffPositions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StaffPositions.belongsTo(models.Staffs, {
        foreignKey: "staff_id",
      });
    }
  }
  StaffPositions.init(
    {
      staff_id: { type: DataTypes.INTEGER },
      staff_title: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "StaffPositions",
    }
  );
  return StaffPositions;
};
