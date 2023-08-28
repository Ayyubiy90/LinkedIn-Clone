import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="logo">
          <h1 className="text-2xl font-bold tracking-tighter">LinkedIn</h1>
        </div>
        
        {/* Search Bar */}
        <div className="search relative">
          <input type="text" placeholder="Search" className="bg-white text-black p-2 rounded-full w-64 focus:outline-none focus:border focus:border-blue-300" />
          <span className="absolute top-3 left-3 text-gray-400">
            🔍
          </span>
        </div>
        
        {/* Navigation Icons */}
        <div className="nav-icons flex space-x-4">
          <span className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition duration-200 ease-in">🏠 Home</span>
          <span className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition duration-200 ease-in">👥 Network</span>
          <span className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition duration-200 ease-in">🔔 Notifications</span>
          <span className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition duration-200 ease-in">✉️ Messages</span>
        </div>
      </div>
    </header>
  );
};

export default Header;