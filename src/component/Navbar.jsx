import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <ul>
        <nav>
        <Link to="/"><li>Home</li></Link>
      <Link to="/login"><li>Login</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/products"><li>Products</li></Link>
        </nav>
        </ul>
    </div>
  )
}
