import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../utils/Context'

const Navbar = () => {

  const {theme,toggleTheme}=useContext(Context)
  return (
    <nav className='navbar'>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>

        </div>

        <div className='mode-switch'>
          <label>
            <input type="checkbox" onChange={toggleTheme} checked={theme==="dark"}/>
            <span className='slider round'></span>
          </label>
        </div>
    </nav>
  )
}

export default Navbar