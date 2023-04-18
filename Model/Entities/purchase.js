const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const Purchase = mongoose.model(
  "Purshase",
  new mongoose.Schema({
    applicationUser: {
      type: new mongoose.Schema({
        email: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
        },
        roles: ["customer"],
      }),
      required: true,
    },
    product: {
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50,
        },
        category: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
        },
      }),
      required: true,
    },
    purchaseDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
  })
);

function validatePurchase(purchase) {
  const schema = Joi.object({
    applicationUserId: Joi.objectId().required(),
    productId: Joi.objectId().required(),
  });
  return schema.validate(purchase);
}

exports.Purchase = Purchase;
exports.validate = validatePurchase;
