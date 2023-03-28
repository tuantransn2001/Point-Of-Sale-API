const {
  Users,
  Customers,
  UserCustomerList,
  CustomerAddressList,
} = require("../models");
const {
  handleFormatCustomerIncludeCheckIsDelete,
  handleFormatUpdateDataByValidValue,
} = require("../common/index");

class CustomerController {
  static async getAll(req, res) {
    try {
      const customerList = await UserCustomerList.findAll({
        include: [
          {
            model: Users,
          },
          {
            model: Customers,
          },
        ],
      });
      const customerAddressList = await CustomerAddressList.findAll();

      res.status(200).send({
        status: "success",
        data: handleFormatCustomerIncludeCheckIsDelete(
          customerList,
          customerAddressList,
          "isArray"
        ),
      });
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
        error: err,
      });
    }
  }
  static async create(req, res) {
    try {
      const {
        user_code,
        user_name,
        user_phone,
        user_email,
        customer_status,
        customer_region,
        customer_commune,
        customer_address,
        staff_id,
        staff_in_charge_note,
        tags,
      } = req.body;

      const newUser = await Users.create({
        user_name,
        user_code,
        user_phone,
        user_email,
        user_type: "customer",
      });
      const newCustomer = await Customers.create({
        staff_id,
        staff_in_charge_note,
        customer_status,
        tags,
      });

      await UserCustomerList.create({
        customer_id: newCustomer.dataValues.id,
        user_id: newUser.dataValues.id,
        user_customer_list_note: `Created staff with staff id: ${staff_id}`,
      });

      await CustomerAddressList.create({
        customer_id: newCustomer.dataValues.id,
        customer_region,
        customer_commune,
        customer_address,
      });

      res.status(201).send("Created successfully!");
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async getByID(req, res) {
    try {
      const { id } = req.params;

      const foundCustomerList = await UserCustomerList.findAll({
        include: [
          {
            model: Users,
          },
          {
            model: Customers,
          },
        ],
        where: {
          customer_id: id,
        },
      });

      const customerAddressList = await CustomerAddressList.findAll();

      if (foundCustomerList.length > 0) {
        res.status(200).send({
          status: "success",
          data: handleFormatCustomerIncludeCheckIsDelete(
            foundCustomerList,
            customerAddressList,
            "isObject"
          ),
        });
      } else {
        res.status(404).send({
          status: "fail",
          data: "Customer Not Found",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: "Server is working wrong!",
      });
    }
  }
  static async deleteByID(req, res) {
    try {
      const { id } = req.params;
      // ? Trường hợp khi xóa rồi -> isDelete = true -> Nếu nhập lại id này thì sẽ fake thông báo ( client xử lý )

      const foundCustomerList = await UserCustomerList.findAll({
        include: [
          {
            model: Users,
          },
          {
            model: Customers,
          },
        ],
        where: {
          customer_id: id,
        },
      });

      const targetUserID = foundCustomerList[0].User.dataValues.id;

      const foundUser = await Users.findOne({
        where: {
          id: targetUserID,
        },
      });

      foundUser.isDelete = true;

      await foundUser.save();

      res.status(202).send({
        status: "success",
        message: "Delete customer successfully!",
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: "Server is working wrong!",
      });
    }
  }
  static async updatePersonalInfoByID(req, res) {
    try {
      const {
        user_code,
        user_name,
        user_phone,
        user_email,
        customer_status,
        staff_id,
        staff_in_charge_note,
        tags,
      } = req.body;

      const { id } = req.params;

      const { user_id, customer_id } = await UserCustomerList.findOne({
        where: {
          customer_id: id,
        },
      });

      const foundUserByID = await Users.findOne({
        where: {
          id: user_id,
        },
      });
      const foundCustomerByID = await Customers.findOne({
        where: {
          id: customer_id,
        },
      });

      await foundUserByID.update(
        handleFormatUpdateDataByValidValue(
          {
            user_code,
            user_name,
            user_phone,
            user_email,
          },
          foundUserByID.dataValues
        ),
        {
          where: {
            id: user_id,
          },
        }
      );

      await foundCustomerByID.update(
        handleFormatUpdateDataByValidValue(
          {
            customer_status,
            staff_id,
            staff_in_charge_note,
            tags,
          },
          foundCustomerByID.dataValues
        ),
        {
          where: {
            id: customer_id,
          },
        }
      );

      res.status(202).send({
        status: "success",
        message: "Update successfully!",
      });
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
      });
    }
  }
  static async addNewAddressByCustomerID(req, res) {
    try {
      const { id } = req.params;
      const { customer_region, customer_commune, customer_address } = req.body;

      await CustomerAddressList.create({
        customer_region,
        customer_commune,
        customer_address,
        customer_id: id,
      });

      res.status(201).send({
        status: "success",
        message: "Add new address successfully!",
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: "Server is working wrong!",
      });
    }
  }
  static async updateAddressByCustomerIDNAddressID(req, res) {
    try {
      const { addressID, customerID } = req.params;
      const { customer_address, customer_commune, customer_region } = req.body;

      const foundCustomerAddress = await CustomerAddressList.findOne({
        where: {
          id: addressID,
          customer_id: customerID,
        },
      });

      const updateAddress = await foundCustomerAddress.update(
        handleFormatUpdateDataByValidValue(
          {
            customer_address,
            customer_commune,
            customer_region,
            updatedAt: new Date(),
          },
          foundCustomerAddress.dataValues
        )
      );

      res.status(201).send(updateAddress);
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async deleteAddressByCustomerIDNAddressID(req, res) {
    try {
      const { addressID, customerID } = req.params;

      const foundCustomerAddress = await CustomerAddressList.findOne({
        where: {
          id: addressID,
          customer_id: customerID,
        },
      });

      if (foundCustomerAddress) {
        await foundCustomerAddress.destroy({
          where: {
            id: addressID,
            customer_id: customerID,
          },
        });

        res.status(201).send({
          status: "success",
          message: "Delete successfully address",
        });
      } else {
        res.status(404).send({
          status: "fail",
          message: "Address Not Found",
        });
      }
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
}

module.exports = CustomerController;
