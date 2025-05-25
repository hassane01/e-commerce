// src/pages/Contact.jsx (or similar path)
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'; // Social media icons
import storeImage from '../assets/images/aboutimage.jpg'; // Replace with your actual image path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic here
    // (e.g., send data to a backend API, an email service, etc.)
    console.log("Form data submitted:", formData);
    alert("Thank you for your message! (Form submission is a demo)");
    // Optionally reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Our Store Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Store Information */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"> {/* Changed text-gray-800 to text-gray-900 for darker black */}
                Our Store
              </h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Address:</span> 342 East American Street, New York, USA - 1212
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Phone:</span> +1 (817) 234 - 234
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Email:</span> info@goru-store.com
                </p>
                <div className="flex items-center space-x-3 pt-2">
                  <span className="font-semibold text-gray-900">Social:</span>
                  <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-blue-600 transition-colors p-1.5 bg-gray-100 hover:bg-gray-200 rounded"> {/* Added background for icon like image */}
                    <FaFacebookF size={14} />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-sky-500 transition-colors p-1.5 bg-gray-100 hover:bg-gray-200 rounded">
                    <FaTwitter size={14} />
                  </a>
                  <a href="#" aria-label="Pinterest" className="text-gray-700 hover:text-red-600 transition-colors p-1.5 bg-gray-100 hover:bg-gray-200 rounded">
                    <FaPinterestP size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Store Image */}
            <div className="w-full">
              <img
                src={storeImage} // Make sure this path is correct
                alt="Interior of our store with a payment transaction"
                className="w-full h-auto object-cover rounded-lg shadow-lg max-h-[400px] md:max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch With Us Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50"> {/* Slightly different background for separation */}
        <div className="container mx-auto max-w-3xl text-center"> {/* max-w-3xl to control form width */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 sm:mb-12 px-4 md:px-0">
            Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            {/* Name, Email, Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Enter your name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 text-sm placeholder-gray-500 bg-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 text-sm placeholder-gray-500 bg-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 text-sm placeholder-gray-500 bg-transparent transition-colors"
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="message" className="sr-only">Your message here</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here"
                required
                className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 text-sm placeholder-gray-500 bg-transparent transition-colors resize-none" // resize-none to prevent user resizing
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gray-900 text-white font-semibold py-3.5 px-12 rounded hover:bg-gray-700 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Shoot
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;