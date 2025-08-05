import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header py-3 shadow-sm">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <h1 className="logo1 mb-0">HerbalNest</h1>

        <nav className="nav justify-content-center flex-grow-1">
          <ul className="nav gap-4 mb-0">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/services">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="text-end">
          <button className="btn btn-appointment">Get Appointment</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
