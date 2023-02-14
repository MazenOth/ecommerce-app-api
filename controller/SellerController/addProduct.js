const express = require("express");
const router = express.Router();
const SellerService = require("../../service/SellerService");
const sellerService = new SellerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("addProduct");
});

router.post("/", (req, res) => {
  var name = req.body.name;
  var price = req.body.price;
  var category = req.body.category;
  sellerService.addProductName(name);
  sellerService.addProductPrice(price);
  var resMessege = sellerService.addProductCategory(category);
  res.send(resMessege);
});

module.exports = router;
