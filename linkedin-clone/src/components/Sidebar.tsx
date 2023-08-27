import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src="/path/to/your/profile-pic.jpg" alt="User Profile" />
        <h2>Your Name</h2>
        <p>Software Engineer</p>
      </div>
      <div className="sidebar__links">
        <a href="/profile">View Profile</a>
        <a href="/connections">Connections</a>
        <a href="/events">Events</a>
        <a href="/groups">Groups</a>
        <a href="/jobs">Job Listings</a>
      </div>
    </div>
  );
};

export default Sidebar;