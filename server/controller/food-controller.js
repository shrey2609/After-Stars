const mongoose = require("mongoose");
const { findByIdAndRemove } = require("../model/Food");
const Food = require("../model/Food");
const User = require("../model/User");

// Get all foods
const getAllFoods = async (req, res, next) => {
  let foods;
  try {
    foods = await Food.find();
  } catch (e) {
    return res.status(500).json({ message: "Error fetching foods", error: e.message });
  }

  if (!foods || foods.length === 0) {
    return res.status(404).json({ message: "No foods found" });
  }

  return res.status(200).json({ foods });
};

// Add new food
const addFood = async (req, res, next) => {
  const { title, desc, img, user, quantity, expiryDate, location } = req.body;

  if (!mongoose.Types.ObjectId.isValid(user)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (e) {
    return res.status(500).json({ message: "Error finding user", error: e.message });
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const food = new Food({
    title,
    desc,
    img,
    user,
    quantity,
    expiryDate,
    location
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await food.save({ session });
    existingUser.donatedFoods.push(food);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    return res.status(500).json({ message: "Failed to add food", error: err.message });
  }

  return res.status(201).json({ food });
};

// Update food by ID
const updateFood = async (req, res, next) => {
  const foodId = req.params.id;
  const { title, desc, quantity, expiryDate, location } = req.body;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(400).json({ message: "Invalid food ID" });
  }

  let food;
  try {
    food = await Food.findByIdAndUpdate(
      foodId,
      { title, desc, quantity, expiryDate, location },
      { new: true }
    );
  } catch (e) {
    return res.status(500).json({ message: "Error updating food", error: e.message });
  }

  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  return res.status(200).json({ food });
};

// Get food by ID
const getById = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid food ID" });
  }

  let food;
  try {
    food = await Food.findById(id);
  } catch (e) {
    return res.status(500).json({ message: "Error fetching food", error: e.message });
  }

  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  return res.status(200).json({ food });
};

// Delete food by ID
const deleteFood = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid food ID" });
  }

  let food;
  try {
    food = await Food.findByIdAndDelete(id).populate("user");
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    const user = food.user;
    user.donatedFoods.pull(food._id);
    await user.save();
  } catch (e) {
    return res.status(500).json({ message: "Unable to delete food", error: e.message });
  }

  return res.status(200).json({ message: "Successfully deleted" });
};

// Get foods by user ID

const getByUserId = async (req, res, next) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    // Check if user exists (optional but recommended)
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all food donations where user field equals userId
    const userFoods = await Food.find({ user: userId });

    if (!userFoods || userFoods.length === 0) {
      return res.status(404).json({ message: "No foods found for this user" });
    }

    return res.status(200).json({ foods: userFoods });
  } catch (err) {
    return res.status(500).json({ message: "Error fetching foods", error: err.message });
  }
};

module.exports = {
  getAllFoods,
  addFood,
  updateFood,
  getById,
  deleteFood,
  getByUserId,
};
