import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-light bg-faded rounded navbar-expand-md">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#containerNavbarCenter" aria-controls="containerNavbarCenter" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="containerNavbarCenter">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/game'>Game</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/apiCall'>Api Call Page</Link></li>
        </ul>
      </div>
    </nav>
  </header>


)

export default Header
