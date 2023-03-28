const express = require("express");
const staffRouter = express.Router();
const { Staffs } = require("../models");
const StaffController = require("../controller/staff-controller");
const { checkExist } = require("../middlewares/validation/checkExist");
const { checkUserExist } = require("../middlewares/validation/checkUserExist");
const { authenticate } = require("../middlewares/auth/authenticate");

staffRouter.get("/get-all", authenticate, StaffController.getAll);
staffRouter.get(
  "/get-by-id/:id",
  checkExist(Staffs),
  authenticate,
  StaffController.getByID
);
staffRouter.post(
  "/create",
  checkUserExist(),
  authenticate,
  StaffController.create
);
staffRouter.patch(
  "/update/:id",
  checkExist(Staffs),
  checkUserExist(),
  authenticate,
  StaffController.updateByID
);
staffRouter.delete(
  "/delete-by-id/:id",
  authenticate,
  StaffController.deleteByID
);
staffRouter.patch(
  "/update-role-by-id/:id",
  checkExist(Staffs),
  authenticate,
  StaffController.updateRoleByStaffIDAndPositionID
);
staffRouter.post(
  "/add-role-by-id/:id",
  checkExist(Staffs),
  authenticate,
  StaffController.addRoleByStaffID
);
staffRouter.delete(
  "/delete-role-by-id/:roleID",
  authenticate,
  StaffController.deleteRoleByStaffPositionID
);
module.exports = { staffRouter };
