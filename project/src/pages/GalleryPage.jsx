import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import img12 from '../components/assets/img12.jpg';
import img11 from '../components/assets/img11.jpg';
import img10 from '../components/assets/img10.jpg';
import img15 from '../components/assets/img15.jpg';
import img5 from '../components/assets/img5.jpg';

// interface GalleryItem {
//   id: number;
//   src: string;
//   alt: string;
//   category: 'events' | 'volunteers' | 'stories';
// }

const galleryItems = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'People distributing food at a community event',
    category: 'events',
  },
  {
    id: 2,
    src: img10,
    alt: 'Volunteers preparing food packages',
    category: 'volunteers',
  },
  {
    id: 3,
    src: img12,
    alt: 'Child receiving food donation',
    category: 'stories',
  },
  {
    id: 4,
    src: img5 ,
    alt: 'Food drive event with many volunteers',
    category: 'events',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Volunteer sorting donations',
    category: 'volunteers',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Family receiving food assistance',
    category: 'stories',
  },
  {
    id: 7,
    src: img15 ,
    alt: 'Community lunch event',
    category: 'events',
  },
  {

    id: 8,
    src: img11 ,
    alt: 'Volunteers loading donation truck',
    category: 'volunteers',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elderly man receiving meal',
    category: 'stories',
  },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
  <>
      <Navbar/>
      <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            Explore images from our food donation events, volunteer activities, and the stories of lives we've impacted together.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-6 py-2 transition-colors ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Photos
          </button>
          <button
            onClick={() => setFilter('events')}
            className={`rounded-full px-6 py-2 transition-colors ${
              filter === 'events'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setFilter('volunteers')}
            className={`rounded-full px-6 py-2 transition-colors ${
              filter === 'volunteers'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Volunteers
          </button>
          <button
            onClick={() => setFilter('stories')}
            className={`rounded-full px-6 py-2 transition-colors ${
              filter === 'stories'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Stories
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full cursor-pointer object-cover transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Image Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </div>
   <Footer/>
  </>
  );
};

export default GalleryPage;