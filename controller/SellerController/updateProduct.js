const express = require("express");
const router = express.Router();
const SellerService = require("../../service/SellerService");
const sellerService = new SellerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("updateProduct");
});

router.post("/", (req, res) => {
  var name = req.body.name;
  var price = req.body.price;
  var category = req.body.category;
  sellerService.updateProductName(name);
  sellerService.updateProductPrice(price);
  var resMessege = sellerService.updateProductCategory(category);
  res.send(resMessege);
});

module.exports = router;
