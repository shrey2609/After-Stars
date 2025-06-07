import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFoundPage= () => {
  return (
   <>
      <Navbar/>
      <div className="flex min-h-screen items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-9xl font-bold text-primary-500">404</h1>
          <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center px-6 py-3"
          >
            <Home size={20} className="mr-2" />
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default NotFoundPage;