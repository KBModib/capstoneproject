import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from './assets/hero-image.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>Little Lemon Restaurant</h1>
        <h2>Johannesburg</h2>
        <h4>A refreshing escape from the city life!</h4>
        <button><Link to="/reservation" className='hero-text-link'>Reserve a Table</Link></button>
      </div>
      <img src={HeroImage} alt='Food' className='hero-image'/>
    </div>
  )
}
