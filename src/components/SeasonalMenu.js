import React from 'react';
import { Link } from 'react-router-dom';
import food1 from './assets/food-1.jpg';
import food2 from './assets/food-2.jpg';
import food3 from './assets/food-3.jpg';
import './SeasonalMenu.css';

const food = [
  {
    name: 'Bruschetta',
    image: food1,
    price: 'R89.99',
    description: `Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, olives, cured meat, and cheese`,
  },
  {
    name: 'Salmon Salad',
    image: food2,
    price: 'R119.99',
    description: `The famous smoked salmon salad with crispy lettuce, carrot, olives, corn, strawberry, radish, chickpeas, mango, and feta cheese.`,
  },
  {
    name: 'Seafood Paella',
    image: food3,
    price: 'R279.99',
    description: `A dish of saffron-flavoured rice cooked with shrimp, calamari, mussels and delicious flavors.
    Served in a single serve pan.`,
  },
]


export default function SeasonalMenu() {
  return (
    <div className='foodcard-container'>
      <h2>Our Summer Faves Are Back!</h2>
      <div className='foodcard-list'>
      {food.map((food, index) => 
      <div className='foodcard'>
        <div><img src={food.image} alt={food.name} width={380} height={250}/></div>
        <div className='foodcard-header'>
          <h5>{food.name}</h5>
          <h5>{food.price}</h5>
        </div>
        <div className='foodcard-text'>
          <p>{food.description}</p>
        </div>
      </div>
      )}
      </div>
      <button className='foodcard-button'><Link to="/menu" className='foodcard-link'>Full Summer Menu</Link></button>
    </div>
  )
}

