const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/E-commerceApi")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const signin = require("../controller/UsersAuthController/signin");
const customerSignup = require("../controller/UsersAuthController/customerSignup");
const sellerSignup = require("../controller/UsersAuthController/sellerSignup");
const buyProduct = require("../controller/CustomerController/buyProduct");
const editAccount = require("../controller/CustomerController/editAccount");
const listProducts = require("../controller/ProductController/listProducts");
const addProduct = require("../controller/SellerController/addProduct");
const updateProduct = require("../controller/SellerController/updateProduct");
const deleteProduct = require("../controller/SellerController/deleteProduct");

app.use("/ecommerce.com/signin", signin);
app.use("/ecommerce.com/customer/signup", customerSignup);
app.use("/ecommerce.com/customer/buyProduct", buyProduct);
app.use("/ecommerce.com/customer/editAccount", editAccount);
app.use("/ecommerce.com/listProducts", listProducts);
app.use("/ecommerce.com/seller/signup", sellerSignup);
app.use("/ecommerce.com/seller/addProduct", addProduct);
app.use("/ecommerce.com/seller/updateProduct", updateProduct);
app.use("/ecommerce.com/seller/deleteProduct", deleteProduct);

app.set("view engine", "pug");
app.set("views", "../views");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
