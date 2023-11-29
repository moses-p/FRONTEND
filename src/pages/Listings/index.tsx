import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Room = {
  standard: string;
  price: number;
};

type Hostel = {
  _id: string;
  name: string;
  description: string;
  rooms: Room[];
};

const Listings: React.FC = () => {
  const [hostels, setHostels] = useState<Hostel[] | undefined>();
  const [selectedHostel, setSelectedHostel] = useState<Hostel | undefined>();

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/hostels');
        setHostels(response.data);
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };

    fetchHostels();
  }, []);

  const handleHostelSelect = (hostel: Hostel) => {
    setSelectedHostel(hostel);
  };

  return (
    <div>
      <h2>Hostel List</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {hostels &&
          hostels.map((hostel) => (
            <div key={hostel._id} style={{ border: '1px solid #ccc', padding: '16px' }}>
              <h3>{hostel.name}</h3>
              <p>{hostel.description}</p>
              <button onClick={() => handleHostelSelect(hostel)}>Select this Hostel</button>
            </div>
          ))}
      </div>

      {selectedHostel && (
        <div>
          <h2>Selected Hostel</h2>
          <p>Name: {selectedHostel.name}</p>
          <p>Description: {selectedHostel.description}</p>
          <h3>Room Information</h3>
          <ul>
            {selectedHostel.rooms.map((room, index) => (
              <li key={index}>
                <p>Room {index + 1}</p>
                <p>Standard: {room.standard}</p>
                <p>Price: {room.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )},
    </div>
  );
};

export default Listings;
