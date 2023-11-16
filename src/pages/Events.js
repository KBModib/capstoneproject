import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventsGrid from '../components/EventsGrid';

export default function Events() {
  return (
    <>
    <Header/>
      <section>
        <EventsGrid/>
      </section>
    <Footer/>
    </>
  )
}
