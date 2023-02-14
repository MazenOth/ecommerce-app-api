const express = require("express");
const router = express.Router();
const SellerService = require("../../service/SellerService");
const sellerService = new SellerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("deleteProduct");
});

router.post("/", (req, res) => {
  var name = req.body.name;
  var resMessege = sellerService.deleteProduct(name);
  res.send(resMessege);
});

module.exports = router;
