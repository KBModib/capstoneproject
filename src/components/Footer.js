import React from 'react';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './assets/logo-white.png'
import "./Footer.css"

const contacts = [
  { icon: faLocationDot, info: '1 Seventh Ave, Parkwood, Johannesburg, 2000', },
  { icon: faPhone, info: '(011) 536-5774', },
  { icon: faEnvelope, info: 'info@littlelemon.com', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faWhatsapp, name: 'whatsapp', },
];

export default function Footer() {
  return (
    <div className='footer-container'>
      <div><Link to="/"><img src={logo} alt='logo' width={80} height={140}/></Link></div>
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
            <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </ul>
      </div>
      <div>
        <ul>
            <li><h4>Stay Up To Date!</h4></li>
            {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
              className='footer-icons'
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </ul>
      </div>
    </div>
  )
}
