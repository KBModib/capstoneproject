import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cooking from '../components/assets/cooking.png';
import '../components/Menu.css'

export default function Menu() {
  return (
    <>
    <Header/>
    <div className='menu-container'>
      <img src={Cooking} alt='frying pan'/>
      <h1>
      We're cooking up a zesty Summer Menu specially for you
      We'll be ready to serve you on the 01 December 2023!
      </h1>
    </div>
    <Footer/>
    </>
  )
}
