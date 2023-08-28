import React from 'react';
import './ProfileSidebar.css';

interface ProfileSidebarProps {
  name: string;
  profileImage: string;
  coverImage: string;
  connections: number;
  headline: string;
  location: string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ 
  name, 
  profileImage, 
  coverImage,
  connections, 
  headline,
  location
}) => {
  return (
    <div className="profile-sidebar bg-white p-4 border rounded">
      <div className="relative">
        <img src={coverImage} alt="cover" className="w-full h-32 object-cover rounded-t" />
        <img src={profileImage} alt={`${name}'s profile`} className="w-24 h-24 rounded-full mt-4 border-4 border-white absolute bottom-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2" />
        <span className="absolute top-2 right-2 text-white cursor-pointer">
          ⚙️
        </span>
      </div>
      
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600 text-sm">{headline}</p>
      <p className="text-gray-400 text-xs">{location}</p>
      <p className="mt-2 text-gray-500 text-xs">{connections} connections</p>

      <div className="mt-4 flex space-x-2">
        <button className="bg-blue-500 text-white p-2 rounded">Connect</button>
        <button className="bg-gray-300 text-black p-2 rounded">Message</button>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <p className="text-sm">👍 Liked a post about JavaScript</p>
        <p className="text-sm">💬 Commented on a Machine Learning article</p>
      </div>

      {/* Endorsements */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">Skills & Endorsements</h3>
        <p className="text-sm">JavaScript: 15 endorsements</p>
        <p className="text-sm">React: 10 endorsements</p>
      </div>
    </div>
  );
};

export default ProfileSidebar;