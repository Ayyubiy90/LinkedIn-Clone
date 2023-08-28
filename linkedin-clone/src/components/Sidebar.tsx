import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  name: string;
  profession: string;
}

const Sidebar: React.FC<SidebarProps> = ({ name, profession }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <img src="/path/to/your/profile-pic.jpg" alt={`${name}'s Profile`} className="w-24 h-24 rounded-full mb-2"/>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 text-sm">{profession}</p>
      </div>
      <div className="mt-4">
        <ul className="space-y-2">
          <li><a href="/profile" className="hover:text-blue-600">View Profile</a></li>
          <li><a href="/connections" className="hover:text-blue-600">Connections</a></li>
          <li><a href="/events" className="hover:text-blue-600">Events</a></li>
          <li><a href="/groups" className="hover:text-blue-600">Groups</a></li>
          <li><a href="/jobs" className="hover:text-blue-600">Job Listings</a></li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Recent</h3>
        <ul className="space-y-1">
          <li><a href="/recent1" className="text-blue-600">#programming</a></li>
          <li><a href="/recent2" className="text-blue-600">#fullstack</a></li>
          <li><a href="/recent3" className="text-blue-600">#reactjs</a></li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Followed Hashtags</h3>
        <ul className="space-y-1">
          <li><a href="/hashtag1" className="text-blue-600">#technology</a></li>
          <li><a href="/hashtag2" className="text-blue-600">#innovation</a></li>
          <li><a href="/hashtag3" className="text-blue-600">#webdevelopment</a></li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Recommendations</h3>
        <ul className="space-y-1">
          <li><a href="/recommendation1" className="text-blue-600">Connect with Jane Doe</a></li>
          <li><a href="/recommendation2" className="text-blue-600">Join 'React Developers' group</a></li>
          <li><a href="/recommendation3" className="text-blue-600">Follow Microsoft</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;