import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <main className="flex flex-grow">
        <Sidebar name={''} profession={''} />
        <Feed />
        <ProfileSidebar name={''} profileImage={''} coverImage={''} connections={0} headline={''} location={''} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;