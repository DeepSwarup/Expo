import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Timeline/>
    <Cards/>
    <Form/>
    <Footer/>
  </div>
  );
}

export default App;
