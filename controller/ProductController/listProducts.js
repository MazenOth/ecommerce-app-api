const express = require("express");
const router = express.Router();
const { Product } = require("../../Model/Entities/product");


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("listProducts");
});

router.post("/", async (req, res, next) => {
  const products = await Product.find().sort("name");
  res.send(products);
});

module.exports = router;
