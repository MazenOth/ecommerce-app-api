const seller = require("../../middleware/seller");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const { Product } = require("../../Model/Entities/product");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("deleteProduct");
});

router.post("/:id", [auth, seller], async (req, res, next) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID wasn't found.");

  res.send(product);
});

module.exports = router;
