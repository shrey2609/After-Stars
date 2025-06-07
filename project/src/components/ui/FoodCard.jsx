import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';



const getStatusColor = (status) => {
  switch (status) {
    case 'urgent':
      return 'bg-error-500';
    case 'fresh':
      return 'bg-success-500';
    case 'claimed':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'urgent':
      return 'Urgent';
    case 'fresh':
      return 'Fresh';
    case 'claimed':
      return 'Claimed';
    default:
      return 'Unknown';
  }
};

const FoodCard = ({ food, onClick }) => {
  const statusColor = getStatusColor(food.status);
  const statusText = getStatusText(food.status);
  
  // Calculate days until expiry
  const today = new Date();
  const expiryDate = new Date(food.expiryDate);
  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="card overflow-hidden"
      onClick={() => onClick && onClick(food)}
    >
      <div className="relative">
        <img 
          src={food.image} 
          alt={food.title} 
          className="h-48 w-full object-cover"
        />
        <div className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColor}`}>
          {statusText}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{food.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {food.description.length > 80 
            ? `${food.description.substring(0, 80)}...` 
            : food.description}
        </p>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock size={16} className="mr-1" />
            <span>{daysUntilExpiry > 0 
              ? `Expires in ${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''}` 
              : 'Expired'}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-1" />
            <span>{food.location}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            By: {food.donorName}
          </span>
          <span className="text-sm font-medium text-primary-500">
            Qty: {food.quantity}
          </span>
        </div>
        
        <div className="mt-4">
          {food.status !== 'claimed' ? (
            <button 
              className="btn btn-primary w-full"
              disabled={food.status === 'claimed'}
            >
              Claim Now
            </button>
          ) : (
            <button className="btn btn-outline w-full" disabled>
              Already Claimed
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;