"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserStaffList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserStaffList.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
      UserStaffList.belongsTo(models.Staffs, {
        foreignKey: "staff_id",
      });
    }
  }
  UserStaffList.init(
    {
      user_id: DataTypes.INTEGER,
      staff_id: DataTypes.INTEGER,
      user_staff_list_note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserStaffList",
    }
  );
  return UserStaffList;
};
