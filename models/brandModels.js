const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: String, // You can use a unique identifier for products (e.g., a generated ID)
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: String,
  productDescription: String,
  productCost: {
    type: Number,
    required: true,
  },
});

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  brandDetails: String,
  brandContactDetails: String,
  products: [productSchema], // Array of products associated with the brand
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
