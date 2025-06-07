import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import FoodCard from './FoodCard';


const MyFood = () => {
  const [claimedFood, setClaimedFood] = useState([]);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);


  const [myFood, setMyFood] = useState([]);


  useEffect(() => {
    const url = "http://localhost:5001/api/cliam/"

    fetch(url)
    .then((response) => response.json())
    .then((data) => setMyFood(data.foods || []))
    .catch((e) => {alert(e.message)
      setMyFood([])
    });
  }, [])

  const navigate = useNavigate();

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
    // handle pickup submission logic here
    alert('Pickup confirmed!');
    closeModals();
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    // handle delivery submission logic here
    alert('Delivery confirmed!');
    closeModals();
  };

  return (

   <>
       <Navbar/>
         {myFood.map((food) => (
              <FoodCard key={food._id} food={food} onFoodClaimed={null} myFood = {true}/>
            ))}
   </>
  );
};

export default MyFood