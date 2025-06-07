import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Utensils, Award, Users, CloudCog } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useSelector } from 'react-redux';

const DonationPage = () => {

  const currentDate = new Date();

  const user = useSelector((store) => store.user);

  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    quantity: "",
    expiryDate: "",
    img: "",
    user: user.id,
    location: "",
  })

  const handleChange = (event) => {
    console.log(inputs, localStorage.getItem("userId"))
    setInputs({ ...inputs, [event.target.name]: `${event.target.value}` })
  };


  const transformDate = (dateStr) => {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:5001/api/donate/add";

    const formattedDate = transformDate(inputs.expiryDate); // e.g. "2025-06-01"

    const requestBody = {
      ...inputs,
      expiryDate: formattedDate, // Use string if your backend expects it
    };

    try {
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Corrected header key
        },
        body: JSON.stringify(requestBody),
      });

      const response = await data.json();
      console.log(response);

      if (data.ok === true) {
        alert("Food added successfully");
      } else {
        alert("Failed to add food: " + (response.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file); // This is a safe temporary URL
    setInputs((prevInputs) => ({
      ...prevInputs,
      img: imageUrl,
    }));
  }
};




  return (
    <>
      <Navbar />
      <div className="py-16 opacity-1">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <motion.h1
              initial={{ opacity: 0.5, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              Make a Donation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              Choose how you'd like to contribute. Donate food directly or support our operations with a monetary donation.
            </motion.p>
          </div>

          {/* Donation Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <div className="mx-auto flex max-w-md overflow-hidden rounded-lg">
              {/* <button
                className={`flex-1 py-4 text-center transition-colors ${donationType === 'food'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                // onClick={() => setDonationType('food')}
              >
                <Utensils size={20} className="mx-auto mb-2" />
                Donate Food
              </button> */}
              {/* <button
              className={`flex-1 py-4 text-center transition-colors ${
                donationType === 'funds'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setDonationType('funds')}
            > */}
              {/* <DollarSign size={20} className="mx-auto mb-2" />
              Donate Funds
            </button> */}
            </div>
          </motion.div>

          {/* Donation Forms */}
          <div className="mx-auto max-w-3xl">
            
            <motion.div
              key="food-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="glass p-8"
            >
              <h2 className="mb-6 text-2xl font-bold">Donate Food</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="input mt-1"
                    placeholder="e.g., Fresh Vegetables"
                    value={inputs.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="desc"
                    rows={3}
                    required
                    className="input mt-1"
                    placeholder="Describe the food items you're donating"
                    value={inputs.desc}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Quantity (servings)
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      required
                      className="input mt-1"
                      placeholder="e.g., 10"
                      value={inputs.quantity}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      id="expiryDate"
                      name="expiryDate"
                      required
                      className="input mt-1"
                      value={inputs.expiryDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="input mt-1"
                    placeholder="e.g., 123 Main St, City"
                    value={inputs.location}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Upload Image
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="img"
                    accept="image/*"
                    placeholder='IMAGE URL'
                    required
                    className="input mt-1"
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full py-3">
                  <Heart size={20} className="mr-2" />
                  Donate Food
                </button>
              </form>
            </motion.div>
            
            {}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonationPage;