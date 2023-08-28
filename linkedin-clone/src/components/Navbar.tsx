import React from 'react';
import './Navbar.css';  // Make sure this path is correct, and that Navbar.css contains the CSS code I provided earlier

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-blue-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="navbar__logo">
          <img src="/path/to/your/logo.png" alt="LinkedIn Clone" className="w-10 h-10" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input type="text" placeholder="Search" className="bg-white text-black p-2 rounded-full w-64" />
          <span className="absolute top-2 left-2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li className="hover:bg-blue-700 p-2 rounded-full cursor-pointer space-y-1">
            <span>🏠</span><br />Home
          </li>
          <li className="hover:bg-blue-700 p-2 rounded-full cursor-pointer space-y-1">
            <span>👥</span><br />Network
          </li>
          <li className="hover:bg-blue-700 p-2 rounded-full cursor-pointer space-y-1">
            <span>💼</span><br />Jobs
          </li>
          <li className="hover:bg-blue-700 p-2 rounded-full cursor-pointer space-y-1">
            <span>💬</span><br />Messaging
          </li>
          <li className="hover:bg-blue-700 p-2 rounded-full cursor-pointer space-y-1">
            <span>🙋</span><br />Me
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;