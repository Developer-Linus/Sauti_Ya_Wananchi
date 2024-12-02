// Import React and useState hook from React library
import React, { useState } from 'react';

// Header component for displaying the navigation bar
function Header() {
  // State to manage the open/closed state of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/closed state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <header>
      <nav>
        <div className="nav-container">
          {/* Logo linking to the home page */}
          <a href="/" className="nav-logo">Sauti ya Wananchi</a>
          
          {/* Hamburger icon for opening/closing the menu */}
          <div className="hamburger" onClick={toggleMenu}>
            ☰ {/* Unicode character for hamburger icon */}
          </div>
          
          {/* Navigation links; 'active' class is added if menu is open */}
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {/* Close button to close the menu */}
            <li className="close-button" onClick={toggleMenu}>✖</li>
            {/* Navigation links to different sections of the site */}
            <li><a href="/petitions" className="nav-link">Petitions</a></li>
            <li><a href="/polls" className="nav-link">Polls</a></li>
            <li><a href="/forums" className="nav-link">Forums</a></li>
            <li><a href="/auth" className="nav-link">Sign Up/Login</a></li>
            <li><a href="./About" className="nav-link">About</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

// Export the Header component for use in other parts of the application
export default Header;