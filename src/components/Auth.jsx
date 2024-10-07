// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';

// Auth component for handling user authentication (login and signup)
function Auth() {
  // State to toggle between login and signup forms
  const [isLogin, setIsLogin] = useState(true);
  
  // State to store form data (username, password, and email for signup)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '', // Email is only needed for sign-up
  });
  
  // State to hold feedback messages (success or error)
  const [message, setMessage] = useState('');

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({
      ...prevData, // Spread previous data
      [name]: value, // Update the specific field with the new value
    }));
  };

  // Function to check if required fields are empty
  const checkEmptyFields = () => {
    if (isLogin) {
      // For login, check if username and password are filled
      return !formData.username || !formData.password;
    } else {
      // For signup, check if username, password, and email are filled
      return !formData.username || !formData.password || !formData.email;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Check for empty fields before proceeding
    if (checkEmptyFields()) {
      alert("Please fill in all required fields."); // Alert user if fields are empty
      return; // Exit the function if fields are empty
    }

    // Determine the API endpoint based on whether it's login or signup
    const url = isLogin ? 'http://localhost:5000/auth/login' : 'http://localhost:5000/auth/signup';

    try {
      // Send POST request to the server with form data
      const response = await axios.post(url, formData);
      setMessage(response.data.message); // Set success message from server response
    } catch (error) {
      // Handle errors and set error message
      const errorMessage = error.response?.data?.message || 'An error occurred'; // Get error message from response
      setMessage(errorMessage); // Set error message in state
      
      // Show alert for incorrect login details
      if (isLogin && errorMessage.toLowerCase().includes('incorrect')) {
        alert("Incorrect login details. Please try again."); // Alert user for incorrect login
      }
    }
  };

  return (
    <div className="auth-container">
      {/* Display appropriate title based on isLogin state */}
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      
      {/* Authentication form */}
      <form onSubmit={handleSubmit}>
        {/* Username input field */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange} // Update state on input change
            required // Mark as required field
          />
        </div>
        
        {/* Conditional rendering of email input for signup */}
        {!isLogin && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange} // Update state on input change
              required // Mark as required field
            />
          </div>
        )}
        
        {/* Password input field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange} // Update state on input change
            required // Mark as required field
          />
        </div>
        
        {/* Submit button */}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      
      {/* Display feedback message if present */}
      {message && <div className="message">{message}</div>}
      
      {/* Button to switch between login and signup forms */}
      <div className="switch-button" onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Sign Up' : 'Login'}
      </div>
    </div>
  );
}

// Export the Auth component for use in other parts of the application
export default Auth;