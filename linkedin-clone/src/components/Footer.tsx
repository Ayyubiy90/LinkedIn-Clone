import React from 'react';
import './Footer.css';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap justify-around text-sm mb-8">
          {/* Each flex item is a div here */}
          <div className="w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li>Our Team</li>
              <li>Our Mission</li>
            </ul>
          </div>
          <div className="w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>
          <div className="w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* New Content */}
        <div className="flex flex-wrap justify-around text-sm mb-8">
          {/* ... Same structure as above */}
          {/* ... */}
        </div>

        {/* Copyright Info */}
        <div className="text-center mt-8 text-sm">
          <p>Copyright © 2023 LinkedIn Clone. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;