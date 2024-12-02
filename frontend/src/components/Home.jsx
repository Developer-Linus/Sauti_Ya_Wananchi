// Import React and necessary icons from react-icons
import React from 'react';
import { FaFileSignature, FaPoll, FaComments, FaChevronUp, FaUniversalAccess } from 'react-icons/fa';

// Home component for displaying the main content of the application
function Home() {
  // Array of key issues to be displayed on the home page
  const issues = [
    { title: "Corruption", description: "Fight against corruption in public offices", icon: "🏛️", label: "Government Building" },
    { title: "Education", description: "Improve access to quality education", icon: "🎓", label: "Graduation Cap" },
    { title: "Healthcare", description: "Enhance healthcare services and infrastructure", icon: "🏥", label: "Hospital" },
    { title: "Employment", description: "Create more job opportunities for youth", icon: "💼", label: "Briefcase" },
  ];

  return (
    <div className="home-container">
      <main className="main-content">
        {/* Welcome section with a title and description */}
        <section className="welcome-section">
          <h2>Welcome to Sauti ya Wananchi</h2>
          <p>Your platform for active citizenship and democratic engagement in Kenya</p>
        </section>

        {/* Key issues section displaying important topics */}
        <section className="key-issues">
          {issues.map((issue, index) => (
            <div key={index} className="key-issue">
              {/* Displaying the issue icon with an accessible label */}
              <span role="img" aria-label={issue.label}>{issue.icon}</span>
              <h3>{issue.title}</h3> {/* Title of the issue */}
              <p>{issue.description}</p> {/* Description of the issue */}
              <button>Learn More</button> {/* Button to learn more about the issue */}
            </div>
          ))}
        </section>

        {/* Section for encouraging user involvement */}
        <section className="get-involved">
          <h3>Get Involved</h3>
          {/* Links to different actions users can take */}
          <a href="/petitions" className="link-item">
            <FaFileSignature className="icon" /> {/* Icon for starting a petition */}
            <p>Start a Petition</p>
          </a>
          <a href="/polls" className="link-item">
            <FaPoll className="icon" /> {/* Icon for participating in polls */}
            <p>Participate in Polls</p>
          </a>
          <a href="/forums" className="link-item">
            <FaComments className="icon" /> {/* Icon for joining discussions */}
            <p>Join Discussions</p>
          </a>
        </section>

        {/* Bottom icons for scrolling and accessibility options */}
        <div className="bottom-icons">
          <button className="scroll-button" aria-label="Scroll to bottom">
            <FaChevronUp size={28} /> {/* Icon for scrolling up */}
          </button>
          <FaUniversalAccess className="accessibility-icon" size={28} aria-label="Accessibility Options" /> {/* Icon for accessibility options */}
        </div>
      </main>
    </div>
  );
}

// Export the Home component for use in other parts of the application
export default Home;