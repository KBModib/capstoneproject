import React from 'react';
import person1 from './assets/test-1.jpg';
import person2 from './assets/test-2.jpg';
import person3 from './assets/test-3.jpg';
import person4 from './assets/test-4.jpg';


const testimonies = [
  {
    fullName: 'Ali Yong',
    image: person1,
    rating: [],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Motshidisi Leano',
    image: person2,
    rating: [],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Shaun Dlamini',
    image: person3,
    rating: [],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Dylan Skous',
    image: person4,
    rating: [],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
]

export default function Testimonials() {
  return (
    <div>
      carousel of testimonies and ratings
      small icons of icons
    </div>
  )
}
