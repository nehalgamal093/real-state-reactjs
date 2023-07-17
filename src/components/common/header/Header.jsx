import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {nav }from '../../data/Data'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
const Header = () => {
  const [navlist,setnavlist] = useState(false)
  return (

 <>
 <header>
    <div className ='container flex'>
        <div className='logo'>
          <img src='../images/logo.png' alt=''/>
        </div>
        <div className='nav'>
        <ul className= {navlist ? "small":"flex"}>
          {
            nav.map((list,index)=>(
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))
          }
        </ul>
        </div>
        <div className="button flex">
          <h4>
            <span>2</span> My List
          </h4>
          <button className='btn1'>
          <FontAwesomeIcon icon={faSignOut} /> Sign in
          </button>
        </div>
        <div className='toggle'>
          <button onClick={() => setnavlist(!navlist)}>
          {
            navlist? <FontAwesomeIcon icon={faTimes} /> :<FontAwesomeIcon icon={faBars} /> 
          }
          </button>
        </div>
    </div>
 </header>
 </>
  )
}

export default Header

