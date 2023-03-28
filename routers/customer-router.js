const express = require("express");
const customerRouter = express.Router();
const CustomerController = require("../controller/customer-controller");
const { Customers } = require("../models");
const { authenticate } = require("../middlewares/auth/authenticate");
const { checkExist } = require("../middlewares/validation/checkExist");
const { checkUserExist } = require("../middlewares/validation/checkUserExist");
customerRouter.get("/get-all", authenticate, CustomerController.getAll);
customerRouter.post(
  "/create",
  authenticate,
  checkUserExist(),
  CustomerController.create
);
customerRouter.get("/get-by-id/:id", authenticate, CustomerController.getByID);
customerRouter.delete(
  "/delete-by-id/:id",
  authenticate,
  checkExist(Customers),
  CustomerController.deleteByID
);
customerRouter.patch(
  "/update-personalInfo-by-id/:id",
  authenticate,
  checkExist(Customers),
  checkUserExist(),
  CustomerController.updatePersonalInfoByID
);
customerRouter.post(
  "/address/add/:id",
  authenticate,
  checkExist(Customers),
  CustomerController.addNewAddressByCustomerID
);
customerRouter.patch(
  "/address/:addressID/update/:customerID",
  authenticate,
  CustomerController.updateAddressByCustomerIDNAddressID
);
customerRouter.delete(
  "/address/:addressID/delete/:customerID",
  authenticate,
  CustomerController.deleteAddressByCustomerIDNAddressID
);
module.exports = { customerRouter };
