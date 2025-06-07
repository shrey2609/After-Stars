import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import FoodSearchPage from './pages/FoodSearchPage';
import DonationPage from './pages/DonationPage';
import OrganizerDashboard from './pages/OrganizerDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import NotFoundPage from './pages/NotFoundPage';
import MyFood from './pages/MyFood';
import GoogleFormPage from './pages/GoogleFormPage';
import EventFormPage from './pages/EventFormPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import RInterface from './pages/Reciever_interface'



function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/search" element={<FoodSearchPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/myfood" element={<MyFood />} />  */}
            <Route path="/food" element={<FoodSearchPage />} /> 
            <Route path="/eventform" element={<GoogleFormPage/>} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reciever-interface" element={<RInterface />} />


            <Route 
              path="/events/new" 
              element={
                <ProtectedRoute roles={['organizer']}>
                  <EventFormPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <OrganizerDashboard />
              } 
            />
            {/* <Route 
              path="/reciever-interface" 
              element={
                <ProtectedRoute roles={['organizer', 'ngo']}>
                  <RInterface />
                </ProtectedRoute>
              } 
            /> */}


            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;