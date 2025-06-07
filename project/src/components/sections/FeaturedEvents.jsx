import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EventCard from '../ui/EventCard';
import img1 from '../assets/img1.jpg'

const sampleEvents= [
  {
    id: '1',
    title: 'Community Food Drive',
    description: 'Join us for our monthly community food drive. Bring non-perishable items to help local families in need.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2025-06-15T10:00:00',
    location: 'Central Park, Lucknow',
    organizerName: 'NYC Food Network',
    volunteerCount: 15,
    maxVolunteers: 25,
  },
  {
    id: '2',
    title: 'Restaurant Surplus Collection',
    description: 'Help collect surplus food from participating restaurants and deliver to local shelters.',
    image: 'https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2025-06-20T18:00:00',
    location: 'Ayodhya Dham,Ayodhya ',
    organizerName: 'LA Food Rescue',
    volunteerCount: 8,
    maxVolunteers: 12,
  },
  {
    id: '3',
    title: 'School Lunch Program',
    description: 'Prepare and distribute nutritious lunches for underprivileged school children.',
    image: img1,
    date: '2025-06-25T08:00:00',
    location: 'Bhopal, Madhya Pradesh',
    organizerName: 'Feeding Future',
    volunteerCount: 20,
    maxVolunteers: 30,
  },
];

const FeaturedEvents= () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400"
          >
            Join our community events to make a difference. From food drives to meal preparations,
            every event is an opportunity to help those in need.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FeaturedEvents;