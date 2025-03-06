import axios from 'axios';




// API function to authenticate user
export const authenticateUser = async (email: string, password:string) => {
  try {
      const response = await axios.post(
          'http://localhost:3500/api/auth/login', 
          { email, password },
          {
              headers: {
                  'Content-Type': 'application/json', // Set Content-Type to application/json
                  // 'Authorization': 'Bearer YOUR_TOKEN_HERE', // Uncomment if you have an auth token
                  // Add any other custom headers here
              }
          }
      );

      // Log the entire response or specific parts as needed
      console.log('Response from backend:', response.data); // Log only the data part
      return response.data; // Return the data part of the response
  } catch (error) {
  
      
      throw new Error(String(error) );
  }
};
