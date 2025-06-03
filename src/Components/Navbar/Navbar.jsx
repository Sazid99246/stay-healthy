import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log('Clicked');
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <Link to="/">
            StayHealthy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 24 24"
              fill="#3685fb"
            >
              <path d="M12 2a7 7 0 0 1 7 7c0 3.25-2.5 6.65-5 9.36V22h-4v-3.64C7.5 15.65 5 12.25 5 9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5c0 2.45 1.93 5.08 4 7.13 2.07-2.05 4-4.68 4-7.13a5 5 0 0 0-5-5z" />
            </svg>
          </Link>
          <span>.</span>
        </div>

        <button
          className="nav__icon"
          onClick={handleClick}
          aria-label="Toggle Menu"
        >
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav__links ${isOpen ? 'active' : ''}`}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/instant-consultation">Appointments</Link>
          </li>
          <li className="link">
            <Link to="/signup">
              <button className="btn1">Sign Up</button>
            </Link>
          </li>
          <li className="link">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
