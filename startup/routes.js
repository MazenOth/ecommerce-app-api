const signin = require("../controller/UsersAuthController/signin");
const customerSignup = require("../controller/UsersAuthController/customerSignup");
const sellerSignup = require("../controller/UsersAuthController/sellerSignup");
const buyProduct = require("../controller/CustomerController/buyProduct");
const editAccount = require("../controller/CustomerController/editAccount");
const listProducts = require("../controller/ProductController/listProducts");
const addProduct = require("../controller/SellerController/addProduct");
const updateProduct = require("../controller/SellerController/updateProduct");
const deleteProduct = require("../controller/SellerController/deleteProduct");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use("/ecommerce.com/signin", signin);
  app.use("/ecommerce.com/customer/signup", customerSignup);
  app.use("/ecommerce.com/customer/buyProduct", buyProduct);
  app.use("/ecommerce.com/customer/editAccount", editAccount);
  app.use("/ecommerce.com/listProducts", listProducts);
  app.use("/ecommerce.com/seller/signup", sellerSignup);
  app.use("/ecommerce.com/seller/addProduct", addProduct);
  app.use("/ecommerce.com/seller/updateProduct", updateProduct);
  app.use("/ecommerce.com/seller/deleteProduct", deleteProduct);
  app.use(error);
  app.set("view engine", "pug");
  app.set("views", "../views");
};
