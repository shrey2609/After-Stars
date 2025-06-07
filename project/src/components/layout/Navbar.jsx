import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Apple, Store } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../store/userSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  // const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();


   const logout = () => {
    dispatch(removeUser()); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md dark:bg-gray-900'
          : isDarkMode
          ? 'bg-blue-500'  // Dark mode: Darker blue
          : 'bg-blue-300'  // Light mode: Lighter blue
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Apple size={32} className="text-red-500" /> {/* Changed apple color to red */}
          <span className="text-xl font-bold">AFTER STARS</span> {/* Made "AFTER STARS" bold */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 md:flex">
          {/* Home Link with active page underline effect */}
          <Link
            to="/"
            className={`relative pb-1 transition-colors hover:text-white ${
              location.pathname === '/' ? 'text-primary-600 font-bold border-b-4 border-orange-700' : ''
            } ${isDarkMode && 'hover:text-white'}`}
          >
            Home
          </Link>

          {/* About Link with active page underline effect */}
          <Link
            to="/about"
            className={`relative pb-1 transition-colors hover:text-white ${
              location.pathname === '/about' ? 'text-primary-600 font-bold border-b-4 border-orange-700' : ''
            } ${isDarkMode && 'hover:text-white'}`}
          >
            About
          </Link>

          {/* Gallery Link with active page underline effect */}
          <Link
            to="/gallery"
            className={`relative pb-1 transition-colors hover:text-white ${
              location.pathname === '/gallery' ? 'text-primary-600 font-bold border-b-4 border-orange-700' : ''
            } ${isDarkMode && 'hover:text-white'}`}
          >
            Gallery
          </Link>

          {/* Find Food Link with active page underline effect */}
          {user.role === "ngo" && <Link
            to="/search"
            className={`relative pb-1 transition-colors hover:text-white ${
              location.pathname === '/search' ? 'text-primary-600 font-bold border-b-4 border-orange-700' : ''
            } ${isDarkMode && 'hover:text-white'}`}
          >
            Find Food
          </Link>}

          {/* Donate Link with active page underline effect */}
          {user.role === "donor" &&<Link
            to="/donate"
            className={`relative pb-1 transition-colors hover:text-white ${
              location.pathname === '/donate' ? 'text-primary-600 font-bold border-b-4 border-orange-700' : ''
            } ${isDarkMode && 'hover:text-white'}`}
          >
            Donate
          </Link>}





          {user.isAuthenticated === true ? (
            <>
              {/* {user?.role === 'organizer' &&  */
              (
                <Link
                  to="/dashboard"
                  className={`transition-colors hover:text-white ${
                    location.pathname === '/dashboard' ? 'text-primary-500' : ''
                  } ${isDarkMode && 'hover:text-white'}`}
                >
                  Dashboard
                </Link>
              )}
              <button onClick={logout} className="btn btn-outline">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}

          <button
            onClick={toggleTheme}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/gallery" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
              {user === "loggedin"? <Link to="/search" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Find Food
              </Link> : null}
              <Link to="/donate" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Donate
              </Link>

              {user === "loggedin" ? <Link to="/myfood" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                MyFood
              </Link> : null}

              {user === "loggedin" ? (
                <>
                  {user?.role === 'organizer' && (
                    <Link to="/dashboard" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                      Dashboard
                    </Link>
                  )}
                  <button onClick={() => { logout(); setIsMenuOpen(false); }} className="btn btn-outline">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;