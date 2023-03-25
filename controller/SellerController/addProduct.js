const express = require("express");
const router = express.Router();
const SellerService = require("../../service/SellerService");
const sellerService = new SellerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("addProduct");
});

router.post("/", (req, res, next) => {
  var name = req.body.name;
  var price = req.body.price;
  var category = req.body.category;
  var numberInStock = req.body.numberInStock;
  var resMessege = sellerService.addProduct(name, category, price, numberInStock);
  res.send(resMessege);
});

module.exports = router;
