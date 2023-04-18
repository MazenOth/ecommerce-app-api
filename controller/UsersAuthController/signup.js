const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const {
  ApplicationUser,
  validate,
} = require("../../Model/Entities/applicationUser");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("signup");
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await ApplicationUser.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new ApplicationUser(_.pick(req.body, ["email", "password", "roles"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(_.pick(user, ["email", "roles"]));
});

module.exports = router;  
