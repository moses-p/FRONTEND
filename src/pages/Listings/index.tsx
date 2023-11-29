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
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

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
    setShowDropdown(true);
  };

  return (
    <div>
      <h2>Hostel List</h2>
      <ul>
        {hostels &&
          hostels.map((hostel) => (
            <li key={hostel._id}>
              <div>
                <h3>{hostel.name}</h3>
                <p>{hostel.description}</p>
                <button onClick={() => handleHostelSelect(hostel)}>Select this Hostel</button>
              </div>
              {showDropdown && selectedHostel && selectedHostel._id === hostel._id && (
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
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Listings;
