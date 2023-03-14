// const ProductDatabase = require("../model/repos/productdatabase");

// const productDatabase = new ProductDatabase();

const {
  Product,
  validate,
} = require("../Model/Entities/product");

module.exports = class SellerService {
  async addProduct(name, category, price, numberInStock) {
    let product = new Product({
      name: name,
      category: category,
      price: price,
      numberInStock: numberInStock
    });

    product = await product.save();

    console.log(product);

    return product;
  }

  async updateProduct(id, name, category, price) {
    const product = await Product.findByIdAndUpdate(
      id,
      { name: name, category: category, price: price },
      { new: true }
    );
  
    if (!product)
      console.log("The product with the given ID wasn't found.");
  
    console.log(product);
  }

  async deleteProduct(id) {
    const product = await Product.findByIdAndRemove(id);

    if (!product)
     console.log("The product with the given ID wasn't found.");

    console.log(product);
  }
}; 
