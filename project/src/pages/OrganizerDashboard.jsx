import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, Clock, Users, MapPin, ArrowUpRight, BarChart3, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/ui/StatCard';
import EventCard from '../components/ui/EventCard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import MyFood from './MyFood';
import DonorDashboard from './DonarDashBoard';

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState('events');

  
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  
  return (
    <>  
    <Navbar/>
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Welcome {user.name}
          </motion.h1>
        </div> 

       {user.role === "ngo" ? <MyFood/> : <DonorDashboard id={user.id}/>}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrganizerDashboard;