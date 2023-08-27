import React from 'react';

interface ProfileSidebarProps {
  name: string;
  profileImage: string;
  connections: number;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ name, profileImage, connections }) => {
  return (
    <div className="profile-sidebar">
      <img src={profileImage} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>{connections} connections</p>
    </div>
  );
};

export default ProfileSidebar;