import React from 'react';
import Banner from './Banner/Banner';
import OurServices from './Services/OurServices';
import ClientsSection from './Services/ClientsSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <ClientsSection></ClientsSection>
    </div>
  );
};

export default Home;