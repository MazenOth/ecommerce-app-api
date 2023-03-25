const express = require("express");
const router = express.Router();
const UsersAuthService = require("../../service/UsersAuthService");
const usersAuthService = new UsersAuthService();

const {
  ApplicationUser,
  validate,
} = require("../../Model/Entities/applicationUser");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const p = Promise.reject(new Error("Something failed DRAMATICLY!"));
p.then(() => console.log("Done"));

router.get("/", (req, res, next) => {
  res.render("signin");
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await ApplicationUser.find().and([
    { email: req.body.email },
    { password: req.body.pwd },
  ]);
  if (user.length === 0) {
    return res.status(400).send("Please check your email or password!");
  } else {
    return res.send(user);
  }
});

module.exports = router;
