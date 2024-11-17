const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);