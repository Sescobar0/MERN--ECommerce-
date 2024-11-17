const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
