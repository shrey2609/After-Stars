import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import FoodCard from './FoodCard';

const DonorDashboard = ({ id }) => {
  const [claimedFood, setClaimedFood] = useState([]);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);
  const [myFood, setMyFood] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5001/api/donate/user/${id}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch food data');
        }
        return response.json();
      })
      .then((data) => {
        if (data.foods && Array.isArray(data.foods)) {
          setMyFood(data.foods);
        } else {
          setMyFood([]);
        }
      })
      .catch((e) => {
        console.error(e);
        alert('Error loading your food data');
        setMyFood([]);
      });
  }, [id]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('claimedFood')) || [];
    setClaimedFood(data);
  }, []);

  const openMap = (location) => {
    const query = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleDelete = (indexToDelete) => {
    const updatedFood = claimedFood.filter((_, index) => index !== indexToDelete);
    setClaimedFood(updatedFood);
    localStorage.setItem('claimedFood', JSON.stringify(updatedFood));
  };

  const handleAddMoreFood = () => navigate('/food');

  const handlePickup = (food) => {
    setCurrentFood(food);
    setShowPickupModal(true);
  };

  const handleDelivery = (food) => {
    setCurrentFood(food);
    setShowDeliveryModal(true);
  };

  const closeModals = () => {
    setShowPickupModal(false);
    setShowDeliveryModal(false);
    setCurrentFood(null);
  };

  const handleSubmitPickup = (e) => {
    e.preventDefault();
    alert('Pickup confirmed!');
    closeModals();
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    alert('Delivery confirmed!');
    closeModals();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Your Food Donations</h2>
        {myFood.length === 0 ? (
          <p>No food items found. Add some!</p>
        ) : (
          myFood.map((food) => (
            <FoodCard key={food._id} food={food} onFoodClaimed={null} myFood={true} />
          ))
        )}
        <button
          onClick={handleAddMoreFood}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add More Food
        </button>
      </div>
    </>
  );
};

export default DonorDashboard;
