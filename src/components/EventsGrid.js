import React from 'react';
import One from './assets/event-1.jpg';
import Two from './assets/event-2.jpg';
import Three from './assets/event-3.jpg';
import Four from './assets/event-4.jpg';
import './EventGrid.css';

export default function EventsGrid() {
  return (
    <>
    <div className='event-container'>
    <h1 className='griditemi'>Come Do Nice Things With Us!</h1>
      <img src={One} alt='' className='griditema'/>
      <img src={Two} alt='' className='griditemb'/>
      <img src={Three} alt='' className='griditemc'/>
      <img src={Four} alt='' className='griditemd'/>
      <div className='griditeme'>
        <h3>Event Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='griditemf'>
        <h3>Event Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='griditemg'>
        <h3>Event Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='griditemh'>
        <h3>Event Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    </>
  )
}
