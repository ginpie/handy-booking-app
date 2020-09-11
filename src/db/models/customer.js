const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => {
        return !Joi.string().email().validate(email).error;
      },
      msg: "Invalid Email Format",
    },
  },

  password: { type: String, required: true },
  lastname: { type: String },
  firstname: { type: String },
  description: { type: String, default: "people " },
});

const Model = mongoose.model("Customer", schema);

module.exports = Model;
