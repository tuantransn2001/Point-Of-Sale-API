const { Users } = require("../models");
const { sequelize } = require("../models");
const { selectAllUser } = require("../data/query");
class UserController {
  static async getAllUserDB(req, res) {
    try {
      const [userList] = await sequelize.query(selectAllUser);
      res.status(200).send(userList);
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
  static async getUserById(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await Users.findOne({
        where: {
          id,
          isDelete: null,
        },
      });

      if (foundUser) {
        res.status(200).send(foundUser);
      } else {
        res.status(404).send({
          status: "error",
          data: "User not found!",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
      });
    }
  }
  static async deleteUserByID(req, res) {
    try {
      const { id } = req.params;
      const foundUser = await Users.findOne({
        where: {
          id,
        },
      });
      if (foundUser) {
        await foundUser.set({
          isDelete: true,
        });
        await foundUser.save();
        res.status(201).send({
          status: 201,
          message: `Delete user successfully!`,
        });
      } else {
        res.status(404).send("User Not Found");
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "User is working wrong!",
        error: err,
      });
    }
  }
}

module.exports = UserController;
