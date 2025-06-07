
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MyFoodPage = () => {
//   const [claimedFood, setClaimedFood] = useState([]);
//   const [showPickupModal, setShowPickupModal] = useState(false);
//   const [showDeliveryModal, setShowDeliveryModal] = useState(false);
//   const [currentFood, setCurrentFood] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('claimedFood')) || [];
//     setClaimedFood(data);
//   }, []);

//   const openMap = (location) => {
//     const query = encodeURIComponent(location);
//     window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
//   };

//   const handleDelete = (indexToDelete) => {
//     const updatedFood = claimedFood.filter((_, index) => index !== indexToDelete);
//     setClaimedFood(updatedFood);
//     localStorage.setItem('claimedFood', JSON.stringify(updatedFood));
//   };

//   const handleAddMoreFood = () => navigate('/food');

//   const handlePickup = (food) => {
//     setCurrentFood(food);
//     setShowPickupModal(true);
//   };

//   const handleDelivery = (food) => {
//     setCurrentFood(food);
//     setShowDeliveryModal(true);
//   };

//   const closeModals = () => {
//     setShowPickupModal(false);
//     setShowDeliveryModal(false);
//     setCurrentFood(null);
//   };

//   const handleSubmitPickup = (e) => {
//     e.preventDefault();
//     // handle pickup submission logic here
//     alert('Pickup confirmed!');
//     closeModals();
//   };

//   const handleSubmitDelivery = (e) => {
//     e.preventDefault();
//     // handle delivery submission logic here
//     alert('Delivery confirmed!');
//     closeModals();
//   };

//   return (
//     <div className="container mx-auto py-10 px-4 relative">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Claimed Food</h1>
//         <button
//           onClick={handleAddMoreFood}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Add More Food
//         </button>
//       </div>

//       {claimedFood.length === 0 ? (
//         <p className="text-gray-500">No food claimed yet.</p>
//       ) : (
//         claimedFood.map((item, index) => (
//           <div key={index} className="mb-6 p-4 border rounded-xl shadow-md bg-white dark:bg-gray-800">
//             <div className="flex gap-4">
//               <img src={item.image} alt={item.title} className="w-32 h-32 rounded object-cover" />
//               <div className="flex-1">
//                 <h2 className="text-xl font-bold">{item.title}</h2>
//                 <p>Quantity: {item.claimedQuantity}</p>
//                 <p>Donor: {item.donorName}</p>
//                 <p>Location: {item.location}</p>
//                 <div className="mt-3 flex gap-4 flex-wrap">
//                   <button
//                     onClick={() => handlePickup(item)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Pickup
//                   </button>
//                   <button
//                     onClick={() => handleDelivery(item)}
//                     className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
//                   >
//                     Delivery
//                   </button>
//                   <button
//                     onClick={() => openMap(item.location)}
//                     className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
//                   >
//                     Navigate
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       )}

//       {/* Pickup Modal */}
//       {showPickupModal && currentFood && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
//           <form onSubmit={handleSubmitPickup} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4 text-blue-600">Pickup Information</h2>
//             <input type="text" required placeholder="Your Name" className="w-full mb-3 p-2 rounded border" />
//             <input type="text" required placeholder="Your Mobile Number" className="w-full mb-3 p-2 rounded border" />
//             <input type="text" required placeholder="Pickup Address" className="w-full mb-3 p-2 rounded border" />
//             <input type="text" placeholder="Near Landmark (optional)" className="w-full mb-3 p-2 rounded border" />
//             <div className="flex justify-between mt-4">
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Confirm Pickup</button>
//               <button onClick={closeModals} type="button" className="text-gray-500 hover:underline">Cancel</button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Delivery Modal */}
//       {showDeliveryModal && currentFood && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
//           <form onSubmit={handleSubmitDelivery} className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl shadow-2xl max-w-md w-full text-white">
//             <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
//             <input type="text" required placeholder="Your Name" className="w-full mb-3 p-2 rounded bg-white text-black" />
//             <input type="text" required placeholder="Your Mobile Number" className="w-full mb-3 p-2 rounded bg-white text-black" />
//             <input type="text" required placeholder="Delivery Address" className="w-full mb-3 p-2 rounded bg-white text-black" />
//             <input type="text" placeholder="Near Landmark (optional)" className="w-full mb-3 p-2 rounded bg-white text-black" />
//             <textarea placeholder="Delivery Instructions (optional)" rows={3} className="w-full mb-3 p-2 rounded bg-white text-black" />
//             <div className="flex justify-between mt-4">
//               <button type="submit" className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">Confirm Delivery</button>
//               <button onClick={closeModals} type="button" className="hover:underline">Cancel</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyFoodPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MyFoodPage = () => {
  const [claimedFood, setClaimedFood] = useState([]);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      // Retrieve claimed food items from localStorage if logged in
      const storedFood = JSON.parse(localStorage.getItem('claimedFood')) || [];
      setClaimedFood(storedFood);
    }
  }, [navigate]);

  const openMap = (location) => {
    const query = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page after logout
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
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold mb-4">My Claimed Food</h1>
            <button
              onClick={handleAddMoreFood}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add More Food
            </button>
          </div>

          {claimedFood.length === 0 ? (
            <p className="text-gray-500">No food claimed yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {claimedFood.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p>Quantity: {item.claimedQuantity}</p>
                      <p>Donor: {item.donorName}</p>
                      <p>Location: {item.location}</p>
                      <div className="mt-3 flex gap-4 flex-wrap">
                        <button
                          onClick={() => handlePickup(item)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          Pickup
                        </button>
                        <button
                          onClick={() => handleDelivery(item)}
                          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                        >
                          Delivery
                        </button>
                        <button
                          onClick={() => openMap(item.location)}
                          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                        >
                          Navigate
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Pickup Modal */}
      {showPickupModal && currentFood && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
          <form onSubmit={handleSubmitPickup} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Pickup Information</h2>
            <input type="text" required placeholder="Your Name" className="w-full mb-3 p-2 rounded border" />
            <input type="text" required placeholder="Your Mobile Number" className="w-full mb-3 p-2 rounded border" />
            <input type="text" required placeholder="Pickup Address" className="w-full mb-3 p-2 rounded border" />
            <input type="text" placeholder="Near Landmark (optional)" className="w-full mb-3 p-2 rounded border" />
            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Confirm Pickup</button>
              <button onClick={closeModals} type="button" className="text-gray-500 hover:underline">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Delivery Modal */}
      {showDeliveryModal && currentFood && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
          <form onSubmit={handleSubmitDelivery} className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl shadow-2xl max-w-md w-full text-white">
            <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
            <input type="text" required placeholder="Your Name" className="w-full mb-3 p-2 rounded bg-white text-black" />
            <input type="text" required placeholder="Your Mobile Number" className="w-full mb-3 p-2 rounded bg-white text-black" />
            <input type="text" required placeholder="Delivery Address" className="w-full mb-3 p-2 rounded bg-white text-black" />
            <input type="text" placeholder="Near Landmark (optional)" className="w-full mb-3 p-2 rounded bg-white text-black" />
            <textarea placeholder="Delivery Instructions (optional)" rows={3} className="w-full mb-3 p-2 rounded bg-white text-black" />
            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200">Confirm Delivery</button>
              <button onClick={closeModals} type="button" className="hover:underline">Cancel</button>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyFoodPage;
