import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = (): React.ReactElement => (
   <div className='header-container'>
      <img
         src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'
         alt='wave'
         className='logo-img'
      />
      <ul>
         <li>
            <Link to='/routerassignment/'>Home</Link>
         </li>
         <li>
            <Link to='/routerassignment/about'>About</Link>
         </li>
         <li>
            <Link to='/routerassignment/contact'>Contact</Link>
         </li>
         <li>
            <Link to='/'>My Projects</Link>
         </li>
      </ul>
   </div>
)
export default Header
