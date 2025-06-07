import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar,Clock, MapPin, Users, Plus, Image } from 'lucide-react';

const GoogleFormPage= () => {
  const [formData, setFormData] = useState({
    fullname: '',
    // description: '',
    dob: '',
    mobile_no: '',
    email: '',
    // time: '',
    // location: '',
    address: '',
    // maxVolunteers: 10,
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
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // This would normally handle the form submission to an API
//     console.log('Event form submitted:', formData);
//     alert('Event created successfully!');
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      mobile: formData.mobile_no,
      email: formData.email,
      address: formData.address,
      dob: formData.dob,
      image: formData.image
    };

    emailjs
      .send('service_rsu979d', 'template_etv9ihj', templateParams, 'silentkiller.grp@gmail.com')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully');
        },
        (error) => {
          console.error(error.text);
          alert('Error sending email');
        }
      );
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
            Join Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            Organize a food donation event to help those in need. Fill out the form below with your details.
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
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  className="input mt-1"
                  placeholder="e.g., Community Food Drive"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              
              
              
              {/* Event Date & Time */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Calendar size={16} className="mr-1 inline-block" />
                    Date Of Birth *
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    className="input mt-1"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                {/* Event mobile_no */}
              <div>
                <label htmlFor="mobile_no" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                   Mobile Number*
                </label>
                <input
                  id="mobile_no"
                  name="mobile_no"
                  type = "number"
                  required
                  className="input mt-1"
                  placeholder="Enter your number"
                  value={formData.mobile_no}
                  onChange={handleChange}
                />
              </div>
              </div>
              
              {/* Event Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input mt-1"
                  placeholder="Enter your email"
                  value={formData.email}
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
              
              {/* Map Preview (Placeholder)
              <div className="rounded-lg border border-gray-300 bg-gray-100 p-4 dark:border-gray-600 dark:bg-gray-700">
                <p className="mb-2 text-sm font-medium">Location Preview</p>
                <div className="h-48 w-full rounded-md bg-gray-200 dark:bg-gray-600">
                  <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400">
                    Map will be displayed here
                  </div>
                </div>
              </div> */}
              
              {/* Volunteer Count
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
              </div> */}
              
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
                <button type="submit" className="btn btn-primary w-full py-3" onClick={handleSubmit }>
                  Join Event
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleFormPage;