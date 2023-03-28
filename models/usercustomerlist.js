"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCustomerList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserCustomerList.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
      UserCustomerList.belongsTo(models.Customers, {
        foreignKey: "customer_id",
      });
    }
  }
  UserCustomerList.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      customer_id: {
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      user_customer_list_note: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "UserCustomerList",
    }
  );
  return UserCustomerList;
};
