import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Header.css';


export default function Header() {
  return (
    <div className='navigation'>
      <Link to='/'><img src={logo} alt='logo' height={80} width={240}/></Link>
      <div>
        <Link to='/' className='nav-links'>Home</Link>
        <Link to='/menu' className='nav-links'>Menu</Link>
        <Link to='/events' className='nav-links'>Events</Link>
        <Link to='/reservation' className='nav-links'>Reservation</Link>
        <Link to='/login' className='nav-links'>Login</Link>
      </div>
    </div>
  )
}
