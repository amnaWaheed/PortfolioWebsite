import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Test from './Test';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <>
    <section id="Homepage" >
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services" >Services</section>
    <section>Parallax</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    </>
  )
} 

export default App