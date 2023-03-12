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
  var id = req.body.id;
  var resMessege = sellerService.deleteProduct(id);
  res.send(resMessege);
});

module.exports = router;
