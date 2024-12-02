// src/App.jsx
// Import necessary dependencies
import React from 'react'; // Import React library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components for routing

// Import components for the application
import Header from './components/Header'; // Header component for navigation
import Footer from './components/Footer'; // Footer component for site information
import Home from './components/Home'; // Home component for the landing page
import Petitions from './components/Petitions'; // Petitions component for managing petitions
import Polls from './components/Polls'; // Polls component for managing polls
import Forums from './components/Forums'; // Forums component for discussions
import About from './components/About'; // About component for information about the platform
import Contact from './components/Contact'; // Contact component for user inquiries
import Auth from './components/Auth'; // Auth component for user authentication (login/signup)

// Main App component that sets up routing for the application
function App() {
  return (
    <Router> {/* Wrap the application in Router for routing functionality */}
      <div>
        <Header /> {/* Render the Header component */}
        <main>
          <Routes> {/* Define the routes for the application */}
            <Route path="/" element={<Home />} /> {/* Route for the home page */}
            <Route path="/auth" element={<Auth />} /> {/* Route for authentication (login/signup) */}
            <Route path="/petitions" element={<Petitions />} /> {/* Route for managing petitions */}
            <Route path="/polls" element={<Polls />} /> {/* Route for managing polls */}
            <Route path="/forums" element={<Forums />} /> {/* Route for discussions in forums */}
            <Route path="/about" element={<About />} /> {/* Route for about information */}
            <Route path="/contact" element={<Contact />} /> {/* Route for contact information */}
          </Routes>
        </main>
        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
  );
}

// Export the App component for use in other parts of the application
export default App;