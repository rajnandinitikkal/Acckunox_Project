import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className='nav-container'>
    <Link to="/" className='nav-menu'>Home</Link>
    <Link to="/About" className='nav-menu'>About</Link>
    <Link to="/Login" className='nav-menu'>Login
    </Link>
    </nav>

    </>
  )
}