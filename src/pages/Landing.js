import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SeasonalMenu from '../components/SeasonalMenu';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

export default function Landing() {
  return (
    <>
    <Header/>
        <Hero/>
        <SeasonalMenu/>
        <About/>
       <Testimonials/>
    <Footer/>
    </>
  )
}
