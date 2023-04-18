const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const applicationUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  balance: {
    type: Number,
    default: 0,
    required: true,
    min: 0,
  },
  roles: ["seller", "customer"]
});

applicationUserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, roles: this.roles }, config.get("jwtPrivateKey"));
  return token;
};

const ApplicationUser = mongoose.model("ApplicationUser", applicationUserSchema);

function validateApplicationUser(applicationUser) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    roles: Joi.string().required(),
    balance: Joi.number().min(0).required().default(0)
  });
  return schema.validate(applicationUser);
}

exports.applicationUserSchema = applicationUserSchema;
exports.ApplicationUser = ApplicationUser;
exports.validate = validateApplicationUser; 


