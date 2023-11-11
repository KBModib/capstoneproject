import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div>
        Add name,short description, picture
      <button><Link to="/reservation">Reserve a Table</Link></button>
    </div>
  )
}
