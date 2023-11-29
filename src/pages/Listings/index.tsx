import { useState, useEffect } from 'react';
import axios from 'axios';
type hostel ={
  _id: string;
  name : string ;
  description: string;  
}
const Listings = () => {
  const [hostels, setHostels] = useState<hostel[]>();
  const [selectedHostel, setSelectedHostel] = useState<hostel>();

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        // Replace the API endpoint with your actual endpoint
        const response = await axios.get('http://localhost:8800/api/hostels');
        setHostels(response.data); // Assuming the response is an array of hostels
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };

    fetchHostels();
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleHostelSelect = (hostel:any) => {
    setSelectedHostel(hostel);
  };

  console.log(hostels)

  return (
    <div>
      <h2>Hostel List</h2>
      <ul>
        {hostels && hostels.map((hostel) => (
          <li key={hostel._id}>
            <div>
              <h3>{hostel.name}</h3>
              <p>{hostel.description}</p>
              <button onClick={() => handleHostelSelect(hostel)}>Select this Hostel</button>
            </div>
          </li>
        ))}
      </ul>

      {selectedHostel && (
        <div>
          <h2>Selected Hostel</h2>
          <p>Name: {selectedHostel.name}</p>
          <p>Description: {selectedHostel.description}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Listings;
