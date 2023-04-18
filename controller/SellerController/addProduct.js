const seller = require("../../middleware/seller");
const _ = require("lodash");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const { Product, validate } = require("../../Model/Entities/product");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("addProduct");
});

router.post("/", [auth, seller], async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let product = await Product.findOne({ name: req.body.name });
  if (product) return res.status(400).send("Product already added.");

  product = new Product(_.pick(req.body, ["name", "price", "category", "numberInStock"]));

  await product.save();

  res.send(product);
});

module.exports = router;
