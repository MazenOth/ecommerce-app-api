const ProductDatabase = require("../Model/Repos/productdatabase");
const UsersDatabase = require("../Model/Repos/UsersDatabase");

const usersDatabase = new UsersDatabase();
const productDatabase = new ProductDatabase();

module.exports = class CustomerService {
  buyProduct(productName) {
    if (productDatabase.getProductPrice(productName) != null) {
      var newBalance =
        usersDatabase.getTestCustomer.getBalance -
        productDatabase.getProductPrice(productName);
      usersDatabase.getTestCustomer.setBalance = newBalance;
      return `Your new balance is ${newBalance}LE.`;
    } else {
      return "Please check your product's name!";
    }
  }
  editAccountDataEmail(email) {
    usersDatabase.getTestCustomer.setEmail = email;
  }
  editAccountDataPassword(password) {
    usersDatabase.getTestCustomer.setPassword = password;
  }
  editAccountDataBalance(balance) {
    usersDatabase.getTestCustomer.setBalance = balance;
    return `Your new email is ${usersDatabase.getTestCustomer.getEmail}
    Your new password is ${usersDatabase.getTestCustomer.getPassword}
    Your new balance is ${balance}`;
  }
};
