const express = require("express");
const router = express.Router();
const CustomerService = require("../../service/CustomerService");
const customerService = new CustomerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("buyProduct");
});

router.post("/", (req, res) => {
  var product = req.body.product;
  var resMessege = customerService.buyProduct(product);
  res.send(resMessege);
});

module.exports = router;
