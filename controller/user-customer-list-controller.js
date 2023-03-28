const { UserCustomerList } = require("../models");

class UserCustomerListController {
  static async getAllUserCustomerList(req, res) {
    try {
      const userCustomerList = await UserCustomerList.findAll();
      res.status(200).send(userCustomerList);
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
}

module.exports = UserCustomerListController;
