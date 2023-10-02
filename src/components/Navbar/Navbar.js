import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='nav-container'>
            <h1>React-js</h1>
            <Link className='nav-items' to="/">Home </Link>
            <Link className='nav-items' to="/About">About</Link>
            <Link className='nav-items' to="/Contact">Contact</Link>
        </div>
    )
}