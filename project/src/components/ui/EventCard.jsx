import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';



const EventCard = ({ event, onClick }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="card overflow-hidden"
      onClick={() => onClick && onClick(event)}
    >
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="h-48 w-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {event.description.length > 80 
            ? `${event.description.substring(0, 80)}...` 
            : event.description}
        </p>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="mr-1" />
            <span>{formattedDate} at {formattedTime}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-1" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users size={16} className="mr-1" />
            <span>{event.volunteerCount} / {event.maxVolunteers} volunteers</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-full rounded-full bg-primary-500" 
              style={{ width: `${(event.volunteerCount / event.maxVolunteers) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            By: {event.organizerName}
          </span>
          <button className="btn btn-primary" onClick={()=> {navigate('/eventform')}}>
            Join Event
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;