"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "AgencyBranchs",
      [
        {
          id: 1,
          agency_branch_name: "LCD",
          agency_branch_CN_code: "CN1",
          agency_branch_phone: "0706952905",
          agency_branch_address:
            "40-42 đường B (Trần Thị Vững), KDC Him Lam Phú Đông, KP Bình Đường 3",
          agency_branch_area: "Bình Dương - Thành phố Dĩ An",
          agency_branch_expiration_date: "21/03/2026",
          agency_branch_status: "active",
          isDefaultCN: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          agency_branch_name: "BẢO HÀNH",
          agency_branch_CN_code: "CN2",
          agency_branch_phone: "0706952905",
          agency_branch_address:
            "40-42 đường B (Trần Thị Vững), KDC Him Lam Phú Đông, KP Bình Đường 3",
          agency_branch_area: "Bình Dương - Thành phố Dĩ An",
          agency_branch_expiration_date: "06/03/2026",
          agency_branch_status: "active",
          isDefaultCN: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          agency_branch_name: "TRUNG TÂM SỬA CHỮA",
          agency_branch_CN_code: "CN2",
          agency_branch_phone: "0706952905",
          agency_branch_address:
            "40-42 đường B (Trần Thị Vững), KDC Him Lam Phú Đông, KP Bình Đường 3",
          agency_branch_area: "Bình Dương - Thành phố Dĩ An",
          agency_branch_expiration_date: "28/03/2026",
          agency_branch_status: "active",
          isDefaultCN: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
