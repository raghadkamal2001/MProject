import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Newspaper, User } from "lucide-react";
import HeroSection from "./HeroSection";
import HealthSection from "./HealthSection";
import PolicySection from "./PolicySection";
import ArgSection from "./ArgSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <HealthSection/>
      <PolicySection/>
      <ArgSection/>
    
    </>
  );
};

export default Home;
