import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul className='nav-menu'>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/admin">Admin</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
