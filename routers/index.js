const express = require("express");
const rootRouter = express.Router();

const { userRouter } = require("../routers/user-router");
const { authRouter } = require("../routers/auth-router");
const { productRouter } = require("../routers/product-router");
const { customerRouter } = require("../routers/customer-router");
const { agencyBranchRouter } = require("../routers/agencyBranch-router");
const { staffRouter } = require("../routers/staff-router");

rootRouter.use("/auth", authRouter);
rootRouter.use("/agency-branch", agencyBranchRouter);
rootRouter.use("/customer", customerRouter);
rootRouter.use("/staff", staffRouter);

module.exports = { rootRouter };
