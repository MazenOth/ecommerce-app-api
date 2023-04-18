const seller = require("../../middleware/seller");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const { Product, validate } = require("../../Model/Entities/product");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("updateProduct");
});

router.post("/:id", [auth, seller], async (req, res, next) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, category: req.body.category, price: req.body.price },
    { new: true }
  );

  if (!product) res.status(404).send("The product with the given ID wasn't found.");

  res.send(product);
});

module.exports = router;
