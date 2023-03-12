// // const ProductDatabase = require("../Model/Repos/productdatabase");
// // const UsersDatabase = require("../Model/Repos/UsersDatabase");

// const usersDatabase = new UsersDatabase();
// const productDatabase = new ProductDatabase();

const {
  Product,
  validate,
  ApplicationUser,
} = require("../Model/Entities/ApplicationUser");

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
 
  async editAccountData(id, email, password, balance) {
    const user = await ApplicationUser.findByIdAndUpdate(
      id,
      { email: email, password: password, balance: balance },
      { new: true }
    );
  
    if (!user)
      console.log("The user with the given ID wasn't found.");
  
    console.log(user);
  }
};
