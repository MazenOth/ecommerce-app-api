const express = require("express");
const router = express.Router();
const SellerService = require("../../service/SellerService");
const sellerService = new SellerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("deleteProduct");
});

router.post("/", (req, res, next) => {
  var id = req.body.id;
  var resMessege = sellerService.deleteProduct(id);
  res.send(resMessege);
});

module.exports = router;
