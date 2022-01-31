const mongoose = require("mongoose");

const ProductSchema = new mongoose.schema({
  name: { type: String, required: true },
  price: { type: Number, default: 1 },
  image: String,
  description: String,
  color: String,
  quantity: { type: Number, min: 1 },
});

module.exports = mongoose.module("Product", ProductSchema);
