const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const auth = require("../../middleware/auth");


const { ApplicationUser } = require("../../Model/Entities/applicationUser");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// const p = Promise.reject(new Error("Something failed DRAMATICLY!"));
// p.then(() => console.log("Done"));

router.get("/", (req, res, next) => {
  res.render("signin");
});

router.get("/me", auth, async (req, res, next) => {
  const user = await ApplicationUser.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await ApplicationUser.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = user.generateAuthToken();
  res.send(token);
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(req);
}

module.exports = router;
