const express = require("express");
const router = express.Router();
const UsersAuthService = require("../../service/UsersAuthService");
const usersAuthService = new UsersAuthService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("sellerSignup");
});

router.post("/", (req, res, next) => {
  var email = req.body.email;
  var password = req.body.pwd;
  var role = "seller"
  var resMessege = usersAuthService.signUp(email, password, role);

  res.send(typeof resMessege.then((value) => value ));
});

module.exports = router;
