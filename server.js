require("dotenv").config();
// ? Fix bug create staff 29/03/2023
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

// ? Change data type to JSON
app.use(express.json());
// ? Allow call api in local server
app.use(cors());
// ? Set up static path
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));
// ? Set root api
app.use("/mhk-api/v1", rootRouter);
// ? Listen port
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server is running in http://localhost:${port}`);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
