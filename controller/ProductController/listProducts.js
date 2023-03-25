const express = require("express");
const router = express.Router();
const ProductService = require("../../service/ProductService");
const productService = new ProductService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("listProducts");
});

router.post("/", (req, res, next) => {
  var resMessege = productService.listProducts();
  res.send(resMessege);
});

module.exports = router;
