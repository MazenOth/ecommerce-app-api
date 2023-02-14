const express = require("express");
const app = express();

const signin = require("../controller/UsersAuthController/signin");
const customerSignup = require("../controller/UsersAuthController/customerSignup");
const sellerSignup = require("../controller/UsersAuthController/sellerSignup");
const buyProduct = require("../controller/CustomerController/buyProduct");
const editAccount = require("../controller/CustomerController/editAccount");
const listProducts = require("../controller/CustomerController/listProducts");
const addProduct = require("../controller/SellerController/addProduct");
const updateProduct = require("../controller/SellerController/updateProduct");
const deleteProduct = require("../controller/SellerController/deleteProduct");

app.use("/amazon.com/signin", signin);
app.use("/amazon.com/customer/signup", customerSignup);
app.use("/amazon.com/customer/buyProduct", buyProduct);
app.use("/amazon.com/customer/editAccount", editAccount);
app.use("/amazon.com/listProducts", listProducts);
app.use("/amazon.com/seller/signup", sellerSignup);
app.use("/amazon.com/seller/addProduct", addProduct);
app.use("/amazon.com/seller/updateProduct", updateProduct);
app.use("/amazon.com/seller/deleteProduct", deleteProduct);

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/amazon.com", (req, res) => {
  res.send("Welcome to Amazon.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
