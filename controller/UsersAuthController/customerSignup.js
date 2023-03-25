const express = require("express");
const router = express.Router();
const UsersAuthService = require("../../service/UsersAuthService");
const usersAuthService = new UsersAuthService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("customerSignup");
});

router.post("/", (req, res, next) => {
  var email = req.body.email;
  var password = req.body.pwd;
  var balance = req.body.balance;
  var role = "customer"
  var resMessege = usersAuthService.signUp(email, password, role, balance);
  res.send(resMessege);
});

module.exports = router;
