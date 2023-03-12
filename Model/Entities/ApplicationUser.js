const Joi = require("joi");
const mongoose = require("mongoose");

const applicationUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
  },
  role: {
    type: String,
    required: true,
    enum: ["seller", "customer"],
  },
  balance: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const ApplicationUser = mongoose.model("ApplicationUser", applicationUserSchema);

function validateApplicationUser(applicationUser) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(50).required(),
    pwd: Joi.string().min(6).max(50).required(),
    role: Joi.string(),
  });
  return schema.validate(applicationUser);
}

exports.applicationUserSchema = applicationUserSchema;
exports.ApplicationUser = ApplicationUser;
exports.validate = validateApplicationUser; 


