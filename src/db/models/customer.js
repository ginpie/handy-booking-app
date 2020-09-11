const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: { type: String, required: true },

  password: { type: String, required: true },
  lastname: { type: String },
  firstname: { type: String },
  description: { type: String, default: "people " },
});

const Model = mongoose.model("Customer", schema);

module.exports = Model;
