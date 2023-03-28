const { AgencyBranchs } = require("../models");
const { handleFormatUpdateDataByValidValue } = require("../common");
class AgencyController {
  static async getAll(req, res) {
    try {
      const agencyBranchList = await AgencyBranchs.findAll();
      res.status(200).send({
        status: "success",
        data: agencyBranchList,
      });
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
      });
    }
  }
  static async create(req, res) {
    try {
      const {
        agency_branch_CN_code,
        agency_branch_name,
        agency_branch_phone,
        agency_branch_address,
        agency_branch_area,
        agency_branch_expiration_date,
        agency_branch_status,
        isDefaultCN,
      } = req.body;

      const foundAgencyBranch = await AgencyBranchs.findOne({
        where: {
          agency_branch_CN_code,
        },
      });

      if (foundAgencyBranch) {
        res
          .status(406)
          .send(
            "Agency Branchs has been already exists! Please check CN_code and try again!"
          );
      } else {
        if (isDefaultCN) {
          await AgencyBranchs.update(
            {
              isDefaultCN: false,
            },
            {
              where: {
                isDefaultCN: true,
              },
            }
          );
        }

        await AgencyBranchs.create({
          agency_branch_CN_code,
          agency_branch_name,
          agency_branch_phone,
          agency_branch_address,
          agency_branch_area,
          agency_branch_expiration_date,
          agency_branch_status,
          isDefaultCN,
        });

        res.status(201).send("Create successfully");
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: "Server is working wrong!",
      });
    }
  }
  static async updateByID(req, res) {
    try {
      const { id } = req.params;
      const {
        isDefaultCN,
        agency_branch_CN_code,
        agency_branch_name,
        agency_branch_phone,
        agency_branch_address,
        agency_branch_area,
        agency_branch_expiration_date,
        agency_branch_status,
      } = req.body;

      const foundProduct = await AgencyBranchs.findOne({
        where: {
          id,
        },
      });

      if (isDefaultCN) {
        await AgencyBranchs.update(
          {
            isDefaultCN: false,
          },
          {
            where: {
              isDefaultCN: true,
            },
          }
        );
      }

      await AgencyBranchs.update(
        handleFormatUpdateDataByValidValue(
          {
            isDefaultCN,
            agency_branch_CN_code,
            agency_branch_name,
            agency_branch_phone,
            agency_branch_address,
            agency_branch_area,
            agency_branch_expiration_date,
            agency_branch_status,
          },
          foundProduct.dataValues
        ),
        {
          where: {
            id,
          },
        }
      );

      res.status(202).send({
        status: "success",
        message: "Update successfully!",
      });
    } catch (err) {
      res.status(500).send("Server is working wrong!");
    }
  }
}

module.exports = AgencyController;
