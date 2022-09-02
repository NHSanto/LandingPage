import React from 'react'
import NavbarMobile from "./NavbarMobile";
import HeroContent from "./HeroContent";


function Hero() {
  return (
    <div className="bg-[#D1EDF5] max-w-full h-[950px]">
         <NavbarMobile/>
        <HeroContent/>
    </div>
  )
}

export default Hero