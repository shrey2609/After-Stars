import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FoodCard from './FoodCard';

const FoodSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [allFood, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleStatusChange = (status) => {
    if (selectedStatus.includes(status)) {
      setSelectedStatus(selectedStatus.filter((s) => s !== status));
    } else {
      setSelectedStatus([...selectedStatus, status]);
    }
  };

  useEffect(() => {
    const url = "http://localhost:5001/api/donate/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFoods(data.foods || []); // fallback to [] if undefined
        setLoading(false);
      })
      .catch((e) => {
        console.error(e.message);
        setError('Failed to load food items.');
        setFoods([]);
        setLoading(false);
      });
  }, []);

  const handleFoodClaimed = (id, quantityClaimed) => {
    setFoods((prevFoods) =>
      prevFoods
        .map((food) =>
          food._id === id
            ? { ...food, quantity: food.quantity - quantityClaimed }
            : food
        )
        .filter((food) => food.quantity > 0)
    );
  };

  const filteredFoods = allFood.filter((food) => {
    const matchesSearch = food.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = food.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <>
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-bold"
            >
              Find Available Food
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              Browse available food donations in your area. Filter by location, type, and more.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 md:flex-row">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder="Search for food..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>



              </div>

            </div>
          </motion.div>

          {loading && <p className="text-center">Loading food items...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {!loading &&
              !error &&
              filteredFoods.length > 0 &&
              filteredFoods.map((food) => (
                <FoodCard key={food._id} food={food} onFoodClaimed={handleFoodClaimed} />
              ))}
            {!loading && !error && filteredFoods.length === 0 && (
              <p className="col-span-full text-center text-gray-600">No food items found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodSearchPage;
