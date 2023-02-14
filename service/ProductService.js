const ProductDatabase = require("../model/repos/productdatabase");

const productDatabase = new ProductDatabase();

module.exports = class ProductService {
  listProducts() {
    return productDatabase.getProducts;
  }
};
