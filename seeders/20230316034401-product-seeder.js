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
      "Products",
      [
        {
          product_name: "MH SS A02/ A12 2020 (ORI CÓ HỘP - A125) - ĐEN",
          product_image: null,
          product_sku: "PVN319",
          product_barcode: "PVN319",
          product_weight: "10g",
          product_unit_type: "CÁI",
          product_classify: "Sản phẩm thường",
          product_type: "MÀN HÌNH",
          product_branch: "SAMSUNG",
          product_tags: "",
          product_retail_price: "0",
          product_shopee_price: "260,000",
          product_price_sell_over_10m: "210,000",
          product_price_sell_under_10m: "220,000",
          product_warranty: "205,000",
          product_wholesale_price: "0",
          product_import_price: "0",
          product_import_shopee_price: "260,000",
          product_sell_status: "Cho phép bán",
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
