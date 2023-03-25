const express = require("express");
const router = express.Router();
const CustomerService = require("../../service/CustomerService");
const customerService = new CustomerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("editAccount");
});

router.post("/", (req, res, next) => {
  var id = req.body.id;
  var email = req.body.email;
  var password = req.body.pwd;
  var balance = req.body.balance;

  var resMessege = customerService.editAccountData(id, email, password, balance);
  res.send(resMessege);
});

module.exports = router;
