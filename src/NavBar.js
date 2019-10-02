import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-success text-decoration-none">
      <ul >
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/new-article">Create Article</Link>
          </li>
          <li>
              <Link to="/article-list">Artcles</Link>
          </li>
          <li>
              <Link to="/article-list" className="dropdown-toggle" data-toggle="dropdown">My Account</Link>
              <ul 
              className="dropdown-menu dropdown-menu-right bg-success text-white">
              <Link to="/register" className="dropdown-item" >Register</Link>
              <div className="dropdown-divider"></div>
              <Link to="/login" className="dropdown-item" >Login</Link>
              </ul>
          </li>
      </ul>
    </nav>
  )
}
export default NavBar;