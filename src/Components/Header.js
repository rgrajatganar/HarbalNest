import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <header className="header py-3 shadow-sm">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <h1 className="logo1 mb-0">HerbalNest</h1>

        <nav className="nav justify-content-center flex-grow-1">
          <ul className="nav gap-4 mb-0">
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/about-us">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-custom" to="/services">Our Services</NavLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/about-us#contact" className="nav-link nav-link-custom">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </nav>

        <div className="text-end">
          <HashLink smooth to="/#appointment">
            <button className="btn btn-appointment">Get Appointment</button>
          </HashLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
