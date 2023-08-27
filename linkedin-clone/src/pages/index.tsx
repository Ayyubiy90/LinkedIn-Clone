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
      <Sidebar />
      <Feed />
      <Footer />
      <Navbar />
      <ProfileSidebar name={''} profileImage={''} connections={0} />
    </div>
  );
};

export default Home;
