import React from "react";
import Header from "../components/Header";
import DiscoverSection from "../components/DiscoverSection";
import Review from "../components/Review";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import PopularDestinations from "../components/PopularDesinations";
import MapSection from "../components/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <DiscoverSection />
      <Review />
      <AboutUs />
      <OurTeam />
      <PopularDestinations />
      <MapSection />
    </>
  );
};

export default Home;
