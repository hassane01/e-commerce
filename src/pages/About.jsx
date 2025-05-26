// src/pages/About.jsx (or wherever you place it)
import React from 'react';
import { Link } from 'react-router-dom';
import aboutimg from '../assets/images/aboutimage.jpg'; // Your main "Our History" image
import { aboutdata } from '../assets/aboutdata'; // Your features data (now with React icon components)

const About = () => {
  return (
    <div className="bg-white">
      {/* Our History Section (remains the same as before) */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Our History
              </h1>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sed id interdum urna. Nam ac elit a ante commodo tristique, condimentum vehicula a hendrerit ac
                nisi. Hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia
                ultrices. Sed id interdum urna.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis
                lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet.
              </p>
              <Link
                to="/shop" // Link to your shop page
                className="inline-block bg-transparent text-gray-800 font-semibold py-3 px-8 border-2 border-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Start Now
              </Link>
            </div>

            {/* Image */}
            <div className="w-full">
              <img
                src={aboutimg}
                alt="Our History - A person making a payment"
                className="w-full h-auto object-cover rounded-lg shadow-lg max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Free Shipping, Support, Return) - MODIFIED PART */}
      <section className="bg-gray-100 py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
            {aboutdata.map((feature, index) => ( // Added index for key, or use a unique id from your data if available
              <div key={feature.title || index} className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-5 p-4">
                {/* Icon - Directly render the component */}
                <div className="flex-shrink-0 bg-gray-200 p-3.5 sm:p-4 rounded-full text-gray-600 text-2xl sm:text-3xl">
                {feature.image}  {/* <-- This will now render <FaShippingFast/>, etc. */}
                </div>
                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;