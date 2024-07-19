const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  startPrice: Number,
  currentBid: Number,
  currentBidder: String,
  bidStartTime: Date,
  bidEndTime: Date,
});

const bidProduct = mongoose.model("bidproduct", ProductSchema);

module.exports = bidProduct;
