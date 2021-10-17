import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="sticky">
            <ul className='ul'>
                <li className='navTitle'><a href="/">Blood Society</a></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="news">News</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="signup">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
