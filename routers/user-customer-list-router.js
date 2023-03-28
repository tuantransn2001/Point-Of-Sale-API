const express = require("express");
const userCustomerRouter = express.Router();
const UserCustomerListController = require("../controller/user-customer-list-controller");

userCustomerRouter.get(
  "/get-all",
  UserCustomerListController.getAllUserCustomerList
);

module.exports = { userCustomerRouter };
