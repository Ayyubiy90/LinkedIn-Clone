import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/path/to/your/logo.png" alt="LinkedIn Clone" />
      </div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/network">My Network</a></li>
        <li><a href="/jobs">Jobs</a></li>
        <li><a href="/messaging">Messaging</a></li>
        <li><a href="/profile">Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;