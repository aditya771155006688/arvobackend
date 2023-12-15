const mongoose = require("mongoose");
const { type } = require("os");

const productsSchema = new mongoose.Schema({
    productId: {
    type: String,
    unique: true, 
    required: true,
  },
  counter:{
    type: Number
  },
  nfcTagId: {
    type: String,
    required: true,
    unique: true,
  }
  // You can add more fields specific to the user's product history
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
