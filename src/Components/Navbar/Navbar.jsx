import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log("Clicked");
    };

    return (
        <div>
            <nav>
                <div className="nav__logo">
                    <a href="/">
                        StayHealthy
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill="#3685fb">
                            <path d="M12 2a7 7 0 0 1 7 7c0 3.25-2.5 6.65-5 9.36V22h-4v-3.64C7.5 15.65 5 12.25 5 9a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5c0 2.45 1.93 5.08 4 7.13 2.07-2.05 4-4.68 4-7.13a5 5 0 0 0-5-5z"/>
                        </svg>
                    </a>
                    <span>.</span>
                </div>

                <button className="nav__icon" onClick={handleClick} aria-label="Toggle Menu">
                    <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <ul className={`nav__links ${isOpen ? 'active' : ''}`}>
                    <li className="link">
                        <a href="../Landing_Page/LandingPage.html">Home</a>
                    </li>
                    <li className="link">
                        <a href="#">Appointments</a>
                    </li>
                    <li className="link">
                        <a href="../Sign_Up/Sign_Up.html">
                            <button className="btn1">Sign Up</button>
                        </a>
                    </li>
                    <li className="link">
                        <a href="../Login/Login.html">
                            <button className="btn1">Login</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
