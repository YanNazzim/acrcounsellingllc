import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css'; // Assuming you'll create a Header.css

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* <img src="/path/to/your/logo.svg" alt="ACR Counseling LLC Logo" /> */}
        <h1>ACR Counseling LLC</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Use Link instead of a */}
          <li><Link to="/our-team">Our Team</Link></li>
          <li><Link to="/rates-fees">Rates & Fees</Link></li>
          <li><Link to="/getting-started">Getting Started</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;