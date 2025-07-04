import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Dashboard from './Dashboard';
import About from './About';
import HowItWorks from './Howitworks';
import Bookings from './Bookings';
import LoginDashboard from './LoginDashboard';
import Contact from './Contact';
import Registration from './Registration';
import Login from './login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Location from './Location';
import AdminDashboard from './AdminDashboard';
import User from './components/User';
import Driver from './components/Driver';
import Layout from './Layout';
import Profile from './profile'; 
import PublicRoute from './routes/PublicRoute';import NotFound from './NotFound';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
        <Route path="/" element={<PublicRoute><Dashboard/></PublicRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login-dashboard" element={<LoginDashboard />} />
        <Route path="/logindashboard" element={<LoginDashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<PublicRoute><Registration /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/location" element={<Location />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<User />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {loading ? <Loader /> : <AppRoutes />}
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
