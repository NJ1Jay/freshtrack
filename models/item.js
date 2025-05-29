const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  expirationDate: Date
});

module.exports = mongoose.model("Item", itemSchema);
