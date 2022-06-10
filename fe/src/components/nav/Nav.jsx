import React from 'react'
import './nav.css'
import {Link} from "react-router-dom";
import {MdDarkMode} from 'react-icons/md';
import {AiOutlineMenu} from 'react-icons/ai';

const Nav = () => {
  return (
    <nav className="nav-bar">
        <div className="left">
            <h1><Link to="/">M2UNIVERSE</Link></h1>
        </div>
        <ul className='right'>
            <li><MdDarkMode size={24}/></li>
            <li><Link to="#"><AiOutlineMenu size={24}/></Link></li>
        </ul>
    </nav>
  )
}

export default Nav