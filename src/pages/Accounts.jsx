// src/pages/AuthPage.jsx (or similar path)
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you use React Router for navigation
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';

const Account = () => {
  // --- Login Form State ---
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    keepLoggedIn: false,
  });

  // --- Registration Form State ---
  const [registerData, setRegisterData] = useState({
    fullName: '', // "Your Name" from image
    usernameReg: '', // Second "User Name" from image, interpreted as Username
    phone: '',
    emailReg: '', // "Email" from image
    passwordReg: '',
    rePassword: '',
    acceptTerms: false,
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic (e.g., API call)
    console.log("Login data:", loginData);
    alert("Login submitted (demo)");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.passwordReg !== registerData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!registerData.acceptTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    // TODO: Implement registration logic (e.g., API call)
    console.log("Register data:", registerData);
    alert("Registration submitted (demo)");
  };

  const inputBaseStyle = "w-full px-4 py-3 bg-gray-100 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:bg-white transition-colors";
  const socialIconStyle = "text-gray-500 hover:text-gray-800 transition-colors text-lg";

  return (
    <div className="bg-white min-h-screen py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Login Section */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Login your account</h2>
            <p className="text-sm text-gray-600 mb-8">
              Login to your account to discovery all great features in this item
            </p>
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label htmlFor="usernameLogin" className="sr-only">User Name</label>
                <input
                  type="text"
                  name="username"
                  id="usernameLogin"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  placeholder="User Name"
                  required
                  className={inputBaseStyle}
                />
              </div>
              <div>
                <label htmlFor="passwordLogin" className="sr-only">Your Password</label>
                <input
                  type="password"
                  name="password"
                  id="passwordLogin"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Your Password"
                  required
                  className={inputBaseStyle}
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="keepLoggedIn"
                    checked={loginData.keepLoggedIn}
                    onChange={handleLoginChange}
                    className="h-4 w-4 text-gray-800 border-gray-300 rounded focus:ring-gray-800 mr-2"
                  />
                  Keep me logged in
                </label>
                <Link to="/forgot-password" className="text-blue-600 hover:underline"> {/* Adjust link as needed */}
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:bg-gray-700 transition-colors uppercase text-sm tracking-wider"
              >
                Login
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">OR LOGIN WITH</p>
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Login with Facebook" className={socialIconStyle}><FaFacebookF /></a>
                <a href="#" aria-label="Login with Twitter" className={socialIconStyle}><FaTwitter /></a>
                <a href="#" aria-label="Login with Google" className={socialIconStyle}><FaGoogle /></a>
                <a href="#" aria-label="Login with Instagram" className={socialIconStyle}><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Registration Section */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Register account now</h2>
            <p className="text-sm text-gray-600 mb-8">
              Pellentesque habitant morbi tristique senectus et netus et
            </p>
            <form onSubmit={handleRegisterSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="sr-only">Your Name</label>
                  <input type="text" name="fullName" id="fullName" value={registerData.fullName} onChange={handleRegisterChange} placeholder="Your Name" required className={inputBaseStyle} />
                </div>
                <div>
                  <label htmlFor="usernameReg" className="sr-only">User Name</label>
                  <input type="text" name="usernameReg" id="usernameReg" value={registerData.usernameReg} onChange={handleRegisterChange} placeholder="User Name" required className={inputBaseStyle} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input type="tel" name="phone" id="phone" value={registerData.phone} onChange={handleRegisterChange} placeholder="Phone" required className={inputBaseStyle} />
                </div>
                <div>
                  <label htmlFor="emailReg" className="sr-only">Email</label>
                  <input type="email" name="emailReg" id="emailReg" value={registerData.emailReg} onChange={handleRegisterChange} placeholder="Email" required className={inputBaseStyle} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="passwordReg" className="sr-only">Password</label>
                  <input type="password" name="passwordReg" id="passwordReg" value={registerData.passwordReg} onChange={handleRegisterChange} placeholder="Password" required className={inputBaseStyle} />
                </div>
                <div>
                  <label htmlFor="rePassword" className="sr-only">Re Password</label>
                  <input type="password" name="rePassword" id="rePassword" value={registerData.rePassword} onChange={handleRegisterChange} placeholder="Re Password" required className={inputBaseStyle} />
                </div>
              </div>
              <div className="text-sm">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={registerData.acceptTerms}
                    onChange={handleRegisterChange}
                    required
                    className="h-4 w-4 text-gray-800 border-gray-300 rounded focus:ring-gray-800 mr-2"
                  />
                  I accept the terms and conditions, including the Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:bg-gray-700 transition-colors uppercase text-sm tracking-wider"
              >
                Register
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">OR REGISTER WITH</p>
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Register with Facebook" className={socialIconStyle}><FaFacebookF /></a>
                <a href="#" aria-label="Register with Twitter" className={socialIconStyle}><FaTwitter /></a>
                <a href="#" aria-label="Register with Google" className={socialIconStyle}><FaGoogle /></a>
                <a href="#" aria-label="Register with Instagram" className={socialIconStyle}><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;