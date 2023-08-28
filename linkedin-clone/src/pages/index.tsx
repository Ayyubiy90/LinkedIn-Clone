import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar name={''} profession={''} />
      <Feed />
      <Footer />
      <Navbar />
      <ProfileSidebar name={''} profileImage={''} coverImage={''} connections={0} headline={''} location={''} />
    </div>
  );
};

export default Home;
