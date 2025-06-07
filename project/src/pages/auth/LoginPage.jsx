import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { CloudCog, Eye, EyeOff } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const LoginPage= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  
  // const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    const url = "http://localhost:5001/api/users/login";

    try {
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log(data);
      const response = await data.json();
      // console.log(response.status);

      
      if(data.ok) {
        dispatch(setUser({
          isAuthenticated: true,  
          id: response.user._id,
          role: response.user.role,
          name: response.user.name
        }));
        localStorage.setItem("userId", response.user._id)
        navigate('/');
      }

      if(data.ok === false)  {
        setError(response.message);
      }
    } catch (err) {


      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="flex min-h-screen items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800"
        >
          <div className="p-8">
            <h2 className="mb-6 text-center text-3xl font-bold">Login to FoodShare</h2>
            
            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input mt-1"
                  placeholder="Name"
                />
              </div> */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input mt-1"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="input pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full py-2"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-primary-500 hover:text-primary-600">
                  Sign up
                </Link>
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

export default LoginPage;