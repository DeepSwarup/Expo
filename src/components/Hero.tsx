import React from "react";

import logo from '../assets/logo.png';


function Hero() {


  return (
    <div className="text-white h-screen bg-center bg-cover custom-img mt-[-55px] section">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70">
      <div className="relative max-w-[800px] mt-0 w-full h-screen mx-auto text-center flex flex-col justify-center" id="home">
        <p className="md:text-2xl sm:text-xl text-[1.2rem] py-2">
          Connect, Collaborate and Sell
        </p>
        <div>
          <img className='mx-auto py-6' src={logo} alt="/" />
          </div>
       
        
        <p className="md:text-2xl sm:text-xl text-[1.2rem] py-2">
          Awaits You...
        </p>
        {/* <Typed className="md:text-3xl sm:text-2xl text-xl py-2 font-bold" strings={['60+ Startups Across Sectors', 'Showcasing Their Products', 'On xx March At NIT, Nagpur']} typeSpeed={100} backSpeed={100} loop /> */}

        {/* <p className="text-sm sm:text-xl">Platform for Startups to showcase their innovative products and get connected to India's leading Academia, Investors, Industrialists. </p> */}
        <p className="text-xl sm:text-2xl font-bold py-6">Hurry up!! Only few slots are left</p>
      <button className="bg-[#ff5757] w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-black hover:scale-105 duration-200"><a href="#form">Register Now</a></button>
      </div>
      </div>
    </div>
  );
}

export default Hero;
