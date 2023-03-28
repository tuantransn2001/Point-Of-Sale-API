"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StaffAgencyBranchInCharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StaffAgencyBranchInCharge.belongsTo(models.StaffPositions, {
        foreignKey: "staff_position_id",
      });
      StaffAgencyBranchInCharge.belongsTo(models.AgencyBranchs, {
        foreignKey: "agency_branch_id",
      });
    }
  }
  StaffAgencyBranchInCharge.init(
    {
      staff_position_id: DataTypes.INTEGER,
      agency_branch_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StaffAgencyBranchInCharge",
    }
  );
  return StaffAgencyBranchInCharge;
};
