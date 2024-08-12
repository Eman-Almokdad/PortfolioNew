"use client"
import './NavBar.css'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menu } from '../../lib/navlink'
import logo from '../../assets/images/logo.png'
import esc from '../../assets/images/esc.svg'
import menuicon from '../../assets/images/Menu.svg'
import { useTheme } from '../../src/App'
import { NavHashLink } from 'react-router-hash-link'
const NavBar = ({Dark , Light}) => {
    const [first, setfirst] = useState(false)
    const { darkMode, toggleTheme } = useTheme();
    return (
    <nav >
        <div className='nav'>
        <img src={logo} alt="" className='logo'  />
{        <ul className='ul-nav' >
        {menu.map((element,index) =>{return(
                <li  key={index}><NavHashLink id={`  ${darkMode ? 'dark' : 'light'} `} to={element.path} className={({ isActive}) =>
                isActive ? "active" : ""
              }>{element.title}</NavHashLink></li>
            )})}
        </ul>}
        <div className='right' >
          <img src={darkMode ? `${Light}`: `${Dark}`   } alt="" onClick={toggleTheme} className='toggleTheme'/>
          <p>{darkMode ? 'Light Mode' : 'Dark Mode'  }</p>
        </div>
        {<button className='menu-icon'onClick={()=>{setfirst(!first)}}>
          <div className={  ` ${darkMode ? 'dark' : 'light'} `} id='sidbar' style={{display: (first)? "block" : "none"}}>
            <img src= {esc} alt="" className='esc'/>
            <ul >
            {menu.map((element,index) =>{return(
                <li key={index}><Link to={element.path} className={({ isActive}) =>
                isActive ? "active" : ""
              }>{element.title}</Link></li>
            )})}
            </ul>
            <div className='sid-buttom' >
          <img src={darkMode ? `${Light}`: `${Dark}`   } alt="" onClick={toggleTheme} className='toggleTheme'/>
          <p>{darkMode ? 'Light Mode' : 'Dark Mode'  }</p>
        </div>
          </div>
        <img src={menuicon} className='menuicon' alt="" />
        </button>}
        </div>
    </nav>
  )
}

export default NavBar