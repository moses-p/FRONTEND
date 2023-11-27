// Listings.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const Listings = () => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get('https://catfact.ninja/fact'); // Replace with your API endpoint
        setHostels(response.data); // Assuming the response is an array of hostels
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };

    fetchHostels();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h2>Hostel List</h2>
     {JSON.stringify(hostels)}
    </div>
  );
};

export default Listings;
