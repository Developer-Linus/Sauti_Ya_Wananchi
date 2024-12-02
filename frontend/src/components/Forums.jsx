// Import necessary dependencies
import React, { useEffect, useState } from 'react'; // Import React and hooks
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios'; // Import axios for making HTTP requests

// Forums component for displaying a list of forums
function Forums() {
  // State to hold forums data
  const [forums, setForums] = useState([]);
  
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  
  // State to manage error state
  const [error, setError] = useState(null);

  // useEffect hook to fetch forums data when the component mounts
  useEffect(() => {
    // Function to fetch forums data from the backend
    const fetchForums = async () => {
      try {
        // Make GET request to fetch forums data
        const response = await axios.get('http://localhost:5000/forums');
        setForums(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        // Handle error if the request fails
        setError('Error fetching forums data');
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchForums(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on component mount

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="forums-container">
      {/* Title for the forums page */}
      <h1 className="forums-title">Forums</h1>
      
      {/* Map through the forums array and display each forum */}
      {forums.map(forum => (
        <div key={forum._id} className="forum"> {/* Use _id from MongoDB as the key */}
          <h2 className="forum-title">{forum.title}</h2> {/* Display forum title */}
          <p className="forum-description">{forum.description}</p> {/* Display forum description */}
          <p className="forum-posts">{forum.posts} posts</p> {/* Display number of posts in the forum */}
          {/* Link to the specific forum page */}
          <Link to={`/forums/${forum._id}`} className="forum-link">View Forum</Link>
        </div>
      ))}
    </div>
  );
}

// Export the Forums component for use in other parts of the application
export default Forums;