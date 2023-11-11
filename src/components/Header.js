import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className='Navigation'>
      <Link to='/'><img src='' alt='logo'/></Link>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/events'>Events</Link>
      <Link to='/reservation'>Reservation</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}
