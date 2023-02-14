const express = require("express");
const router = express.Router();
const UsersAuthService = require("../../service/UsersAuthService");
const usersAuthService = new UsersAuthService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("signin");
});

router.post("/", (req, res) => {
  var email = req.body.email;
  var password = req.body.pwd;
  var resMessege = usersAuthService.signIn(email, password);
  res.send(resMessege);
});

module.exports = router;
