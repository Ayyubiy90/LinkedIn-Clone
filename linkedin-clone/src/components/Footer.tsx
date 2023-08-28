import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        
        <div className="flex justify-around">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul>
              <li>Our Team</li>
              <li>Our Mission</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* New Content */}
        <div className="flex justify-around mt-8">
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Help Center</h3>
            <ul>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Languages</h3>
            <ul>
              <li>English</li>
              <li>French</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Country</h3>
            <ul>
              <li>United States</li>
              <li>Canada</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Accessibility</h3>
            <ul>
              <li>Keyboard Shortcuts</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
        </div>

        {/* Copyright Info */}
        <div className="text-center mt-8">
          <p>Copyright © 2023 LinkedIn Clone. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;