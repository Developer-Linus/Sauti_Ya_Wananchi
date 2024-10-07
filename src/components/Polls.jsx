// Import necessary dependencies
import React, { useEffect, useState } from 'react'; // Import React and hooks
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios'; // Import axios for making HTTP requests

// Polls component for displaying and managing polls
function Polls() {
  // State to hold polls data
  const [polls, setPolls] = useState([]);
  
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  
  // State to manage error state
  const [error, setError] = useState(null);

  // useEffect hook to fetch polls data when the component mounts
  useEffect(() => {
    // Function to fetch polls data from the backend
    const fetchPolls = async () => {
      try {
        // Make GET request to fetch polls data
        const response = await axios.get('http://localhost:5000/polls');
        setPolls(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        // Handle error if the request fails
        setError('Error fetching polls data');
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchPolls(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on component mount

  // Function to handle voting on a poll option
  const handleVote = (pollId, optionId) => {
    setPolls(
      polls.map(poll => {
        if (poll._id === pollId) { // Use _id from MongoDB to find the poll
          return {
            ...poll,
            options: poll.options.map(option => {
              if (option.id === optionId) { // Find the selected option
                return { ...option, votes: option.votes + 1 }; // Increment the vote count
              }
              return option; // Return the option unchanged if it doesn't match
            }),
          };
        }
        return poll; // Return the poll unchanged if it doesn't match
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
    <div className="polls-container">
      {/* Title for the polls page */}
      <h1 className="polls-title">Polls</h1>
      
      {/* Map through the polls array and display each poll */}
      {polls.map(poll => (
        <div key={poll._id} className="poll"> {/* Use _id from MongoDB as the key */}
          <h2 className="poll-question">{poll.title}</h2> {/* Title of the poll */}
          <p className="poll-description">{poll.description}</p> {/* Description of the poll */}
          <ul className="poll-options">
            {/* Map through the options for each poll */}
            {poll.options.map(option => (
              <li key={option.id} className="poll-option">
                <input
                  type="radio"
                  name={`poll-${poll._id}`} // Group options by poll ID
                  id={`option-${poll._id}-${option.id}`} // Unique ID for each option
                  onChange={() => handleVote(poll._id, option.id)} // Handle voting when an option is selected
                />
                <label htmlFor={`option-${poll._id}-${option.id}`}>{option.text}</label> {/* Display option text */}
                <span className="poll-votes">{option.votes} votes</span> {/* Display number of votes for the option */}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Link to view results of the polls */}
      <Link to="/results" className="polls-link">View Results</Link>
    </div>
  );
}

// Export the Polls component for use in other parts of the application
export default Polls;