const express = require("express");
const router = express.Router();
const SellerService = require("../../service/SellerService");
const sellerService = new SellerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("updateProduct");
});

router.post("/", (req, res, next) => {
  var id = req.body.id;
  var name = req.body.name;
  var price = req.body.price;
  var category = req.body.category;
  var resMessege = sellerService.updateProduct(id, name, category, price);
  res.send(resMessege);
});

module.exports = router;
