const { AgencyBranchs } = require("../models");
const { checkExist } = require("../middlewares/validation/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const AgencyController = require("../controller/agencyBranch-controller");
const express = require("express");
const agencyBranchRouter = express.Router();

agencyBranchRouter.get("/get-all", authenticate, AgencyController.getAll);
agencyBranchRouter.post("/create", authenticate, AgencyController.create);
agencyBranchRouter.patch(
  "/update-by-id/:id",
  checkExist(AgencyBranchs),
  authenticate,
  AgencyController.updateByID
);
module.exports = { agencyBranchRouter };
