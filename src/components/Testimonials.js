import React from 'react';
import person1 from './assets/test-1.jpg';
import person2 from './assets/test-2.jpg';
import person3 from './assets/test-3.jpg';
import person4 from './assets/test-4.jpg';
import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Testimonial.css';
const testimonies = [
  {
    fullName: 'Ali Yong',
    image: person1,
    rating: [1, 1, 1, 1, 0.5],
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Motshidisi Leano',
    image: person2,
    rating: [1, 1, 1, 1, 1],
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Shaun Dlamini',
    image: person3,
    rating: [1, 1, 1, 1],
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Dylan Skous',
    image: person4,
    rating: [1, 1, 1, 1, 1],
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
]

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

export default function Testimonials() {
  return (
    <div className='testimonial-container'>
    <h2>What others have to say about us!</h2>
    <div className='testimonials'>
    {testimonies.map((testimonies, index) => 
      <div className='testimonial-card'>
        <div><img src={testimonies.image} alt='customers' className='test-image'/></div>
        <div>
          <h4>{testimonies.fullName}</h4>
          <span>
        {testimonies.rating.map((ratingPoint, index) => 
          <FontAwesomeIcon 
            key={index} 
            icon={ratingLevels[ratingPoint]} 
            size="xs" 
            color='gold'
          />
        )}
      </span>
      <blockquote><p>"{testimonies.comment}"</p></blockquote>
        </div>
      </div>
  )}
  </div>
    </div>
  )
}
