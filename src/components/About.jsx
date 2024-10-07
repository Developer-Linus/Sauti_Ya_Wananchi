// Import React library
import React from 'react';

// Define the About component
function About() {
  return (
    // Main container for the About page
    <div className="about-container">
      {/* Main title */}
      <h1 className="about-title">About Us</h1>
      
      {/* Introduction paragraph */}
      <p className="about-description">
        <strong>Sauti ya Wananchi</strong> (Voice of the Citizens) is a pioneering platform dedicated to empowering Kenyan citizens to actively participate in governance and democratic processes. Our mission is to provide a space where voices can be heard, ideas can be shared, and change can be initiated.
      </p>

      {/* Vision section */}
      <h1 className="about-section-title">Our Vision</h1>
      <p className="about-description">
        To foster a vibrant, informed, and engaged citizenry that actively contributes to the governance and development of Kenya.
      </p>

      {/* What We Offer section */}
      <h1 className="about-section-title">What We Offer</h1>
      <ul className="about-list">
        <li><strong>Petitions:</strong> Start and sign petitions to advocate for change on issues that matter to you.</li>
        <li><strong>Polls:</strong> Participate in polls to express your opinions and influence decision-making.</li>
        <li><strong>Forums:</strong> Join discussions with fellow citizens to share ideas and collaborate on solutions.</li>
      </ul>

      {/* Commitment section */}
      <h1 className="about-section-title">Our Commitment</h1>
      <p className="about-description">
        We are committed to maintaining a secure, inclusive, and user-friendly platform that respects the diversity and opinions of all Kenyans. We believe in the power of collective action and the importance of every voice in shaping the future of our nation.
        <br /><br />
        Join us in making a difference. Together, we can build a better Kenya.
      </p>
    </div>
  );
}

// Export the About component for use in other parts of the application
export default About;