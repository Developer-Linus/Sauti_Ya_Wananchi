// Import necessary dependencies
import React, { useEffect, useState } from 'react'; // Import React and hooks
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios'; // Import axios for making HTTP requests

// Petitions component for displaying and managing petitions
const Petitions = () => {
  // State to hold petitions data
  const [petitions, setPetitions] = useState([]);
  
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  
  // State to manage error state
  const [error, setError] = useState(null);

  // useEffect hook to fetch petitions data when the component mounts
  useEffect(() => {
    // Function to fetch petitions data from the backend
    const fetchPetitions = async () => {
      try {
        // Make GET request to fetch petitions data
        const response = await axios.get('http://localhost:5000/petitions');
        setPetitions(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        // Handle error if the request fails
        setError('Error fetching petitions data');
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchPetitions(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on component mount

  // Function to handle signing a petition
  const handleSign = (petitionId) => {
    setPetitions(
      petitions.map(petition => {
        if (petition._id === petitionId) { // Use _id from MongoDB to find the petition
          return { ...petition, signatures: petition.signatures + 1 }; // Increment the signature count
        }
        return petition; // Return the petition unchanged if it doesn't match
      })
    );
  };

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="petitions-container">
      {/* Title for the petitions page */}
      <h1 className="petitions-title">Petitions</h1>
      
      {/* Map through the petitions array and display each petition */}
      {petitions.map(petition => (
        <div key={petition._id} className="petition"> {/* Use _id from MongoDB as the key */}
          <h2 className="petition-title">{petition.title}</h2> {/* Title of the petition */}
          <p className="petition-description">{petition.description}</p> {/* Description of the petition */}
          <p className="petition-signatures">{petition.signatures} signatures</p> {/* Number of signatures */}
          {/* Button to sign the petition */}
          <button onClick={() => handleSign(petition._id)}>Sign</button>
        </div>
      ))}
      
      {/* Link to view results of the petitions */}
      <Link to="/results" className="petitions-link">View Results</Link>
    </div>
  );
};

// Export the Petitions component for use in other parts of the application
export default Petitions;