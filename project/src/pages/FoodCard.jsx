import React, { useState } from "react";

const FoodCard = ({ food, onFoodClaimed, myFood = false }) => {
  const [claimedQuantity, setClaimedQuantity] = useState(0);

  const [input, setInputs] = useState({
    title: food.title,
    desc: food.desc,
    quantity: "",
    expiryDate: food.expiryDate,
    img: food.img,
    user: localStorage.getItem("userId"),
    location: food.location,
  });

  const handleIncrease = () => {
    if (claimedQuantity < parseInt(food.quantity)) {
      const newQuantity = claimedQuantity + 1;
      setClaimedQuantity(newQuantity);
      setInputs({ ...input, quantity: newQuantity });
    }
  };

  const handleDecrease = () => {
    if (claimedQuantity > 0) {
      const newQuantity = claimedQuantity - 1;
      setClaimedQuantity(newQuantity);
      setInputs({ ...input, quantity: newQuantity });
    }
  };

  const handleClaim = async () => {
    const url = "http://localhost:5001/api/cliam/add";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Food claimed successfully");

        onFoodClaimed(food._id, claimedQuantity);
        setClaimedQuantity(0);
      } else {
        alert("Failed to claim food: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-4 transition hover:shadow-2xl">
      {/* Add cache buster with timestamp to force reload */}
      <img
        src={`${food.img}?t=${Date.now()}`}
        alt={food.title}
        className="h-48 w-full object-cover rounded-lg"
      />
      <h2 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">
        {food.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-300">{food.desc}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-200">
        Available: {food.quantity}
      </p>

      {myFood !== true && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Quantity:
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              disabled={claimedQuantity === 0}
            >
              −
            </button>
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {claimedQuantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              disabled={claimedQuantity >= parseInt(food.quantity)}
            >
              +
            </button>
          </div>
        </div>
      )}

      {myFood !== true && (
        <button
          onClick={handleClaim}
          disabled={claimedQuantity === 0}
          className={`mt-4 w-full py-2 rounded-md text-white transition ${
            claimedQuantity > 0
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Claim {claimedQuantity > 0 && `(${claimedQuantity})`}
        </button>
      )}
    </div>
  );
};

export default FoodCard;
