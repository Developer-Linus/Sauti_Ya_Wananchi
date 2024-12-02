// src/pages/Contact.jsx
// Import React and necessary icons from react-icons
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons for social media

// Contact component for displaying contact information and feedback options
function Contact() {
  return (
    <div className="contact-container">
      {/* Main title for the contact page */}
      <h1 className="contact-title">Contact Us</h1>
      
      {/* Description paragraph explaining the purpose of the contact page */}
      <p className="contact-description">
        We value your feedback and are here to assist you with any questions or concerns you may have. 
        Please feel free to reach out to us through any of the following methods:
      </p>

      {/* Subtitle for getting in touch */}
      <h2 className="contact-subtitle">Get in Touch</h2>
      
      {/* Email contact information */}
      <h3 className="contact-heading">Email:</h3>
      <p className="contact-text">
        For general inquiries and support, email us at 
        <a href="mailto:support@sautiyawananchi.co.ke" className="contact-link"> support@sautiyawananchi.co.ke</a>.
      </p>
      
      {/* Phone contact information */}
      <h3 className="contact-heading">Phone:</h3>
      <p className="contact-text">
        Call us at <span className="contact-phone">+254 700 000 000</span>. 
        Our support team is available Monday to Friday, 9 AM to 5 PM EAT.
      </p>

      {/* Social media section for connecting with the organization */}
      <div className="social-media">
        <h3 className="contact-heading">Social Media:</h3>
        <p>Connect with us on social media for the latest updates and community discussions:</p>
        <ul className="social-media-list">
          {/* Facebook link with icon */}
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-media-link facebook">
              <FaFacebook size={30} /> {/* Facebook icon */}
            </a>
          </li>
          {/* Twitter link with icon */}
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-link twitter">
              <FaTwitter size={30} /> {/* Twitter icon */}
            </a>
          </li>
          {/* Instagram link with icon */}
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-link instagram">
              <FaInstagram size={30} /> {/* Instagram icon */}
            </a>
          </li>
        </ul>
      </div>

      {/* Subtitle for office visit information */}
      <h2 className="contact-subtitle">Visit Us</h2>
      <h3 className="contact-heading">Office Address:</h3>
      <p className="contact-text">
        Sauti ya Wananchi <br />
        123 Civic Engagement Street <br />
        Nairobi, Kenya
      </p>

      {/* Subtitle for feedback section */}
      <h2 className="contact-subtitle">Feedback</h2>
      <p className="contact-text">
        We are always looking to improve our platform. If you have any suggestions or feedback, 
        please fill out our feedback form and let us know how we can serve you better. 
        Thank you for being a part of Sauti ya Wananchi. Your voice matters!
      </p>
    </div>
  );
}

// Export the Contact component for use in other parts of the application
export default Contact;