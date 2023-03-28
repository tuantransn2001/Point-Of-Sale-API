const express = require("express");
const userRouter = express.Router();
const UserController = require("../controller/user-controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

userRouter.get(
  "/get-all-db",
  // authenticate,
  // authorize,
  UserController.getAllUserDB
);
userRouter.get(
  "/get-by-id/:id",
  authenticate,
  authorize,
  UserController.getUserById
);
userRouter.delete(
  "/delete-by-id/:id",
  authenticate,
  authorize,
  UserController.deleteUserByID
);

module.exports = { userRouter };
