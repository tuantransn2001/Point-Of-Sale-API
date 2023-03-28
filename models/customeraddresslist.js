"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomerAddressList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CustomerAddressList.belongsTo(models.Customers, {
        foreignKey: "customer_id",
      });
    }
  }
  CustomerAddressList.init(
    {
      customer_id: DataTypes.INTEGER,
      customer_region: DataTypes.STRING,
      customer_commune: DataTypes.STRING,
      customer_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CustomerAddressList",
    }
  );
  return CustomerAddressList;
};
