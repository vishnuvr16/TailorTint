const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    porductId: {
      ref: "product",
      type: String,
    },
    quantity: String,
    userId: {
      ref: "user",
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const orderHistory = mongoose.model("orders", orderSchema);

module.exports = orderHistory;
