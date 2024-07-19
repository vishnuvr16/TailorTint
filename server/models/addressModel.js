const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      ref: "user",
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const addressModel = mongoose.model("savedAddress", addressSchema);

module.exports = addressModel;
