"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customers.hasMany(models.CustomerAddressList, {
        foreignKey: "customer_id",
      });
    }
  }
  Customers.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      staff_id: DataTypes.INTEGER,
      customer_status: DataTypes.STRING,
      staff_in_charge_note: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customers",
    }
  );
  return Customers;
};
