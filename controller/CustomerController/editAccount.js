const express = require("express");
const router = express.Router();
const CustomerService = require("../../service/CustomerService");
const customerService = new CustomerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("editAccount");
});

router.post("/", (req, res) => {
  var email = req.body.email;
  var password = req.body.pwd;
  var balance = req.body.balance;
  customerService.editAccountDataEmail(email);
  customerService.editAccountDataPassword(password);
  var resMessege = customerService.editAccountDataBalance(balance);
  res.send(resMessege);
});

module.exports = router;
