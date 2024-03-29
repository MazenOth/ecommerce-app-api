const customer = require("../../middleware/customer");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

const {
  ApplicationUser,
  validate,
} = require("../../Model/Entities/applicationUser");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("editAccount");
});

router.post("/:id", [auth, customer], async (req, res, next) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await ApplicationUser.findByIdAndUpdate(
    req.params.id,
    { email: req.body.email, password: req.body.password, roles: "customer", balance: 0 },
    { new: true }
  );

  if (!user) res.status(404).send("The user with the given ID wasn't found.");

  res.send(user);
});

module.exports = router;
