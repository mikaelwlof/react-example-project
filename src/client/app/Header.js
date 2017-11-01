import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        <li><Link to='/apiCall'>Api Call Page</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
