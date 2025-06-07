import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar,Clock, MapPin, Users, Plus, Image } from 'lucide-react';

const EventFormPage= () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    address: '',
    maxVolunteers: 10,
    image: null ,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally handle the form submission to an API
    console.log('Event form submitted:', formData);
    alert('Event created successfully!');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            Create Food Donation Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            Organize a food donation event to help those in need. Fill out the form below with your event details.
          </motion.p>
        </div>

        {/* Event Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <form onSubmit={handleSubmit} className="glass p-8">
            <div className="space-y-6">
              {/* Event Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Event Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="input mt-1"
                  placeholder="e.g., Community Food Drive"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              
              {/* Event Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Event Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  className="input mt-1"
                  placeholder="Describe your event, its purpose, and what attendees should expect"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              
              {/* Event Date & Time */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Calendar size={16} className="mr-1 inline-block" />
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="input mt-1"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Clock size={16} className="mr-1 inline-block" />
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    className="input mt-1"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Event Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  <MapPin size={16} className="mr-1 inline-block" />
                  Location Name *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="input mt-1"
                  placeholder="e.g., Central Community Center"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="input mt-1"
                  placeholder="e.g., 123 Main St, City, State, ZIP"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              
              {/* Map Preview (Placeholder) */}
              <div className="rounded-lg border border-gray-300 bg-gray-100 p-4 dark:border-gray-600 dark:bg-gray-700">
                <p className="mb-2 text-sm font-medium">Location Preview</p>
                <div className="h-48 w-full rounded-md bg-gray-200 dark:bg-gray-600">
                  <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400">
                    Map will be displayed here
                  </div>
                </div>
              </div>
              
              {/* Volunteer Count */}
              <div>
                <label htmlFor="maxVolunteers" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Users size={16} className="mr-1 inline-block" />
                  Maximum Volunteers
                </label>
                <input
                  type="number"
                  id="maxVolunteers"
                  name="maxVolunteers"
                  min="1"
                  required
                  className="input mt-1"
                  value={formData.maxVolunteers}
                  onChange={handleChange}
                />
              </div>
              
              {/* Event Image */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Image size={16} className="mr-1 inline-block" />
                  Event Image
                </label>
                <div className="mt-1 flex items-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-600">
                    {formData.image ? (
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="Event"
                        className="h-full w-full rounded-md object-cover"
                      />
                    ) : (
                      <Plus size={32} className="text-gray-400" />
                    )}
                  </div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="ml-4 block text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-primary-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-primary-700 hover:file:bg-primary-100 dark:text-gray-400 dark:file:bg-primary-900/20 dark:file:text-primary-400"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="btn btn-primary w-full py-3">
                  Create Event
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EventFormPage;