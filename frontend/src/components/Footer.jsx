// Import React library
import React from 'react';

// Footer component for displaying contact information, useful links, and legal information
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Contact Information */}
        <div className="footer-column">
          <h2 className="footer-title">Contact Us</h2>
          {/* Email contact link */}
          <p>Email: <a href="mailto:info@sautiyawananchi.co.ke" className="footer-link">info@sautiyawananchi.co.ke</a></p>
          {/* Phone contact link */}
          <p>Phone: <a href="tel:+254123456789" className="footer-link">+254 123 456 789</a></p>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-column">
          <h2 className="footer-title">Quick Links</h2>
          <nav className="footer-nav">
            <ul>
              {/* Navigation links to different sections of the site */}
              <li><a href="/petitions" className="footer-link">Petitions</a></li>
              <li><a href="/polls" className="footer-link">Polls</a></li>
              <li><a href="/forums" className="footer-link">Forums</a></li>
              <li><a href="/profile" className="footer-link">Profile</a></li>
            </ul>
          </nav>
        </div>

        {/* Column 3: Legal and Love for Kenya */}
        <div className="footer-column">
          {/* Message expressing love for the people of Kenya */}
          <p className="footer-love">Made with love for the people of Kenya</p>
          <nav className="footer-nav">
            <ul>
              {/* Legal links for terms and privacy policy */}
              <li><a href="/terms" className="footer-link">Terms</a></li>
              <li><a href="/privacy" className="footer-link">Privacy</a></li>
            </ul>
          </nav>
          {/* Copyright notice */}
          <p className="footer-copyright">&copy; 2024 Sauti ya Wananchi. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

// Export the Footer component for use in other parts of the application
export default Footer;