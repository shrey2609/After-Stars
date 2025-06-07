import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import shreyash from '../components/assets/shreyash.jpg'
import shivi from '../components/assets/shivi.jpg'
import pp from '../components/assets/pp.jpg'
import img7 from '../components/assets/img7.jpg'
import Footer from '../components/layout/Footer';

const founders = [
  {
    name: 'Shivendra Kumar Srivastava',
    role: 'Founder & Visionary',
    image: shivi,
    bio: ' Partnerships and ensures effective food redistribution through community engagement, Leads vision and tech development.',
  },
  {
    name: 'Shreyash Pandey',
    role: 'Founder & Outreach Head',
    image: shreyash,
    bio: 'Handles technical development with a strong passion for solving food wastage and helping the needy. Leads the vision and drives innovation through technology.',
  },
  {
    name: 'Prince Pandey',
    role: 'Co-Founder & Operations Lead',
    image: pp,
    bio: 'Manages logistics and operations, ensuring timely and safe delivery of surplus food.',
  },
];


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-5xl font-bold"
            >
              About <span className="text-primary-500">After Stars</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400"
            >
              We're a community-driven platform dedicated to fighting hunger and reducing food waste.
              By connecting food donors with those in need, we're creating a more sustainable and compassionate world.
            </motion.p>
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="glass p-8 md:p-12">
              <div className="md:flex md:items-center md:gap-8">
                <div className="mb-6 md:mb-0 md:flex-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <Target size={32} />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    At After Stars, our mission is to create a world where no one goes hungry and no food goes to waste.
                    We believe that by leveraging technology and community action, we can bridge the gap between food
                    surplus and food scarcity.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    We work tirelessly to connect restaurants, grocery stores, and individuals with excess food to local
                    shelters, food banks, and individuals in need. Through our platform, we aim to make food donation
                    simple, efficient, and impactful.
                  </p>
                </div>
                <div className="overflow-hidden rounded-lg md:flex-1">
                  <img


                    src={img7}
                    alt="People volunteering at food bank"


                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Who We Are Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Who We Are</h2>
            <div className="glass p-8 md:p-12">
              <div className="md:flex md:items-center md:gap-8">
                <div className="mb-6 md:order-2 md:mb-0 md:flex-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-500 text-white">
                    <Users size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                  After Stars was founded in 2023 by a group of passionate individuals who saw both the problem of food waste
                    and the issue of hunger in their communities. Our team brings together expertise in technology, logistics,
                    food safety, and nonprofit management.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    We're driven by a shared belief that everyone deserves access to nutritious food, and that by working
                    together, we can create meaningful change.
                  </p>
                </div>
                <div className="overflow-hidden rounded-lg md:order-1 md:flex-1">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team collaborating"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Do Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">What We Do</h2>
            <div className="glass p-8 md:p-12">
              <div className="md:flex md:items-center md:gap-8">
                <div className="mb-6 md:mb-0 md:flex-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-white">
                    <Heart size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Through our platform, we enable:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                      <span>Food donors to quickly and easily share surplus food</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                      <span>Nonprofits and food banks to access fresh food donations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                      <span>Volunteers to contribute their time and transportation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                      <span>Companies to donate funds to support our operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                      <span>Communities to organize food drives and events</span>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg md:flex-1">
                  <img
                    src="https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Volunteers sorting food donations"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founders Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Our Founders</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl border border-gray-200 p-6 text-center shadow-md transition-transform duration-300 hover:shadow-xl dark:border-gray-700"
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold">{founder.name}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400">{founder.role}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{founder.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Sustainability */}
              <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in creating systems that are environmentally sustainable and reduce waste in all forms.
                </p>
              </div>

              {/* Compassion */}
              <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Compassion</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We approach our work with empathy and understanding, recognizing the dignity of all people.
                </p>
              </div>

              {/* Community */}
              <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in the power of people coming together to solve shared challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;