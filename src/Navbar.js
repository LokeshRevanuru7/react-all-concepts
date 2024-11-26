import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/About"><li>About</li></Link>

      </ul>
    </div>
  )
}

export default Navbar
