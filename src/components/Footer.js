import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer-container'>
      <div><Link to="/"><img  alt='logo'/></Link></div>
      <div>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/reservation'>Reservation</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
      </div>
      <div>
        <ul>
            <li><h4>Get In Touch!</h4></li>
            <li>Address</li>
            <li>telephone</li>
            <li>email</li>
        </ul>
      </div>
      <div>
        <ul>
            <li><h4>Stay Up To Date!</h4></li>
            <li><a href={'https://www.facebook.com'}>Facebook</a></li>
            <li><a href={'https://www.instagram.com'}>Instagram</a></li>
            <li><a href={'https://www.twitter.com'}>X</a></li>
            <li><a href={'https://www.whatsapp.com'}>Whatsapp</a></li>
        </ul>
      </div>
    </div>
  )
}
