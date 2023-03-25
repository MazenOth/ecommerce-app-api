const { Purchase, validate } = require("../../Model/Entities/purchase");
const { ApplicationUser } = require("../../Model/Entities/applicationUser");
const { Product } = require("../../Model/Entities/product");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CustomerService = require("../../service/CustomerService");
const customerService = new CustomerService();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.render("buyProduct");
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const applicationUser = await ApplicationUser.findById(req.body.applicationUserId);
  if (!applicationUser) return res.status(400).send("Invalid application user.");

  const product = await Product.findById(req.body.productId);
  if (!product) return res.status(400).send("Invalid product.");

  if (product.numberInStock === 0)
    return res.status(400).send("Product not in stock.");

  let purchase = new Purchase({
    applicationUser: {
      _id: applicationUser._id,
      email: applicationUser.email,
      role: applicationUser.role,
    },
    product: {
      _id: product._id,
      name: product.name,
      category: product.category,
    },
  });

  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      const result = await purchase.save();
      product.numberInStock--;
      var newBalance = applicationUser.balance - product.price;
      applicationUser.balance = newBalance;
      applicationUser.save();
      product.save();
      res.send(result);
    });

    session.endSession();
    console.log('success');
  } catch (error) {
    console.log('error111', error.message);
  }
});

module.exports = router;
