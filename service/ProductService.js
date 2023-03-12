const {
  Product,
  validate,
} = require("../Model/Entities/product");

module.exports = class ProductService {
  async listProducts() {
    const products = await Product.find().sort("name");
  console.log(products);
  }
};
