import React from 'react'
import './nav.css'
import {Link} from "react-router-dom";
import {MdDarkMode} from 'react-icons/md';

const Nav = () => {
  return (
    <nav className="nav-bar">
        <div className="left">
            <h1><Link to="/">M2UNIVERSE</Link></h1>
        </div>
        <ul className='right'>
            <li><Link to="/main">Home</Link></li>
            <li><Link to="#">Music</Link></li>
            <li><Link to="#">Community</Link></li>
            <li><Link to="#">Sign in</Link></li>
            <li><MdDarkMode size={16}/></li>
        </ul>
    </nav>
  )
}

export default Nav