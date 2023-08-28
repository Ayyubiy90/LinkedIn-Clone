import React from 'react';

interface SidebarProps {
  name: string;
  profession: string;
}

const Sidebar: React.FC<SidebarProps> = ({ name, profession }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src="/path/to/your/profile-pic.jpg" alt={`${name}'s Profile`} />
        <h2>{name}</h2>
        <p>{profession}</p>
      </div>
      <div className="sidebar__links">
        <a href="/profile">View Profile</a>
        <a href="/connections">Connections</a>
        <a href="/events">Events</a>
        <a href="/groups">Groups</a>
        <a href="/jobs">Job Listings</a>
      </div>
      {/* New Section for Recent Activities */}
      <div className="sidebar__recent">
        <h3>Recent</h3>
        <a href="/recent1">#programming</a>
        <a href="/recent2">#fullstack</a>
        <a href="/recent3">#reactjs</a>
      </div>
      {/* New Section for Followed Hashtags */}
      <div className="sidebar__hashtags">
        <h3>Followed Hashtags</h3>
        <a href="/hashtag1">#technology</a>
        <a href="/hashtag2">#innovation</a>
        <a href="/hashtag3">#webdevelopment</a>
      </div>
      {/* New Section for Recommendations/Suggestions */}
      <div className="sidebar__recommendations">
        <h3>Recommendations</h3>
        <a href="/recommendation1">Connect with Jane Doe</a>
        <a href="/recommendation2">Join 'React Developers' group</a>
        <a href="/recommendation3">Follow Microsoft</a>
      </div>
    </div>
  );
};

export default Sidebar;