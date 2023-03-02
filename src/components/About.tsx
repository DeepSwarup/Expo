import React from "react";
import Home from "../assets/home.jpg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4 section" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-6" src={Home} alt="/" />
      </div>
    </div>
  );
};

export default About;
