const express = require("express");
const {
  signup,
  login,
  protect,
  forgotPassword,
  resetPassword,
  changePassword,
} = require("../controllers/authControllers");
const { me, updateMe,getAllUsers } = require("../controllers/userControllers");

const {addProduct,brand, addBrnadProduct,allproduct,allbrands} = require("../controllers/userProductControllers");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

router.patch("/changePassword", protect, changePassword);

router.get("/me", protect, me);
router.patch("/updateMe", protect, updateMe);

router.get("/getallproduct",allproduct)
router.get("/getallbrand",allbrands)


router.post("/product", addProduct);
router.post("/brand", brand);
router.post("/brandProduct", addBrnadProduct);

router.get("/getallusers",getAllUsers)

module.exports = router;
