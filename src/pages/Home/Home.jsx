import React from 'react';
import Banner from './Banner/Banner';
import OurServices from './Services/OurServices';
import ClientsSection from './Services/ClientsSection';
import InfoCards from './Services/InfoCards';
import BeMerchant from './BeMerchant/BeMerchant';
import Testimonials from './Services/Testimonials';
import FAQ from './Services/FAQ';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <ClientsSection></ClientsSection>
      <InfoCards></InfoCards>
      <BeMerchant></BeMerchant>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;