import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Smaller Image */}
      <img
        className="w-[250px] h-[350px] lgl:w-[300px] lgl:h-[450px] z-10 rounded-lg object-contain"
        src={bannerImg}
        alt="bannerImg"
        style={{ position: 'relative' }} // Ensure image stays within the boundary
      />
      
      {/* Background Gradient */}
      <div className="absolute bottom-0 w-[300px] h-[350px] lgl:w-[350px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-lg"></div>
    </div>
  );
};

export default RightBanner;
