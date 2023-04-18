const seller = require("../../middleware/seller");
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

router.post("/:id", [auth, seller], async (req, res, next) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await ApplicationUser.findByIdAndUpdate(
    req.params.id,
    { email: req.body.email, password: req.body.password, roles: "seller", balance: req.body.balance },
    { new: true }
  );

  if (!user) res.status(404).send("The user with the given ID wasn't found.");

  res.send(user);
});

module.exports = router;
