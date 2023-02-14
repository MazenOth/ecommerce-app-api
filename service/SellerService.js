const ProductDatabase = require("../model/repos/productdatabase");

const productDatabase = new ProductDatabase();

module.exports = class SellerService {
  addProductName(productName) {
    productDatabase.getNewProduct.setName = productName;
  }
  addProductPrice(price) {
    productDatabase.getNewProduct.setPrice = price;
  }
  addProductCategory(category) {
    productDatabase.getNewProduct.setCategory = category;
    productDatabase.addProduct();
    return `Your product name is: ${productDatabase.getNewProduct.getName}, 
    your product category is: ${productDatabase.getNewProduct.getCategory}, 
    Your product price is: ${productDatabase.getNewProduct.getPrice}`;
  }
  updateProductName(productName) {
    productDatabase.getTestProduct.setName = productName;
  }
  updateProductPrice(price) {
    productDatabase.getTestProduct.setPrice = price;
  }
  updateProductCategory(category) {
    productDatabase.getTestProduct.setCategory = category;
    productDatabase.updateProduct();
    return `Your new product name is: ${productDatabase.getTestProduct.getName}, 
    your new product category is: ${productDatabase.getTestProduct.getCategory}, 
    Your new product price is: ${productDatabase.getTestProduct.getPrice}`;
  }
  deleteProduct(productName) {
    return productDatabase.deleteProduct(productName);
  }
};
