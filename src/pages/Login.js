import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <>
    <Header/>
      Login form make validation local/session. Register and Sign-in
      <button><Link to="/profile">Login/Register</Link></button>
    <Footer/>
    </>
  )
}
