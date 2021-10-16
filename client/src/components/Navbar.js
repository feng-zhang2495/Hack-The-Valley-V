import React from 'react'
import './Navbar.css'

const NavBar = () => {
    return (
        <div>
            <ul className='ul'>
                <li className='navTitle'>Blood Society</li>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar
