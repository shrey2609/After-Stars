import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Heart, HandHelping } from 'lucide-react';
import Food1 from '../assets/Food1.jpg'; // ✅ Import your Food1 image here

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `url(${Food1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional: Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.h1 
            variants={item}
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Sharing Food, <br />
            <span className="text-accent-400">Fighting Hunger</span> Together
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="mb-8 text-lg md:text-xl"
          >
            Join our mission to reduce food waste and feed those in need.
            Connect with local food drives, donate surplus food, or volunteer your time.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap gap-4"
          >

            <Link 
              to="/donate" 
              className="btn border-2 border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white/10"
            >
              <Heart size={20} className="mr-2" />
              Donate
            </Link>

          </motion.div>
          
          <motion.div 
            variants={item}
            className="mt-12 flex flex-wrap justify-start gap-8 text-center"
          >
            <div>
              <p className="text-3xl font-bold">25K+</p>
              <p className="text-sm">Meals Donated</p>
            </div>
            <div>
              <p className="text-3xl font-bold">120+</p>
              <p className="text-sm">Active Donors</p>
            </div>
            <div>
              <p className="text-3xl font-bold">45+</p>
              <p className="text-sm">Events</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
