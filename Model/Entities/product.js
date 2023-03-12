const Joi = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  category: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    category: Joi.string().min(5).max(50).required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(applicationUser);
}

exports.productSchema = productSchema;
exports.Product = Product;
exports.validate = validateProduct;

