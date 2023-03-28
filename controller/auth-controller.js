require("dotenv").config();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const { handleGetFirstNameFromFullName } = require("../common");

class AuthController {
  static async register(req, res) {
    try {
      const { name, phone, email, password, type } = req.body;
      // * 1: Check user is already exists or not
      const oldUser = await Users.findOne({
        where: {
          user_email: email,
          isDelete: null,
        },
      });

      if (oldUser) {
        res.status(404).send(`User is already exists!`);
      } else {
        const newUser = {
          user_type: type || "employee",
          user_name: name,
          user_phone: phone,
          user_email: email,
          user_password: password,
        };
        await Users.create(newUser);
        res.status(200).send({
          status: "success",
          data: newUser,
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async login(req, res) {
    try {
      const { phone, password } = req.body;
      // * Check user'email,password is correct or not

      const foundUser = await Users.findOne({
        where: {
          user_phone: phone,
          user_password: password,
        },
      });

      if (!foundUser) {
        // ! If in-correct -> send message
        res.status(404).send({
          status: "error",
          message: "Phone does not exist ! Please try again!",
        });
      } else {
        // ? If correct ->  create token -> send to client side

        const jwtSecretKey = process.env.JWT_TOKEN_SECRET_KEY;

        const tokenData = {
          id: foundUser.id,
          email: foundUser.user_email,
        };

        const token = jwt.sign(tokenData, jwtSecretKey, {
          expiresIn: "72000s",
        });

        res.status(200).send({
          status: "success",
          name: handleGetFirstNameFromFullName(foundUser.user_name),
          token,
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong",
      });
    }
  }
}

module.exports = AuthController;
