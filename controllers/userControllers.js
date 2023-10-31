const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

exports.me = async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.updateMe = asyncHandler(async (req, res, next) => {
  const { name, email } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name,
      email,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    user: updatedUser,
  });
});

exports.getAllUsers=asyncHandler( async(req,res)=>{
  try {
    // Retrieve all users from the User model
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve users" });
  }
})
