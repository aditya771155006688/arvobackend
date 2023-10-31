const mongoose = require("mongoose");
const { type } = require("os");

const userProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  description: String,
  Date: {type:Date, value:Date.now()},
  productOriginality:String,
  price: {
    type: Number,
    required: true,
  },
  // You can add more fields specific to the user's product history
});

const UserProduct = mongoose.model("UserProduct", userProductSchema);

module.exports = UserProduct;
