import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>ACR Counseling LLC</h1>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu} aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}> {/* Apply 'open' class when menu is open */}
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/our-team" onClick={toggleMenu}>Our Team</Link></li>
          <li><Link to="/rates-fees" onClick={toggleMenu}>Rates & Fees</Link></li>
          <li><Link to="/getting-started" onClick={toggleMenu}>Getting Started</Link></li>
          <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;