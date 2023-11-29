import React, { useState, useEffect, FormEvent } from 'react';
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
  const [newHostel, setNewHostel] = useState<Hostel>({
    _id: '',
    name: '',
    description: '',
    rooms: [],
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewHostel((prevHostel) => ({
      ...prevHostel,
      [name]: value,
    }));
  };

  const handleAddHostel = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/hostels', newHostel);
      setHostels((prevHostels) => [...(prevHostels || []), response.data]);
      setNewHostel({
        _id: '',
        name: '',
        description: '',
        rooms: [],
      });
    } catch (error) {
      console.error('Error adding hostel:', error);
    }
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
      )}

      <div>
        <h2>Add New Hostel</h2>
        <form onSubmit={handleAddHostel}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={newHostel.name} onChange={handleInputChange} required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={newHostel.description} onChange={handleInputChange} required />

          <button type="submit">Add Hostel</button>
        </form>
      </div>
    </div>
  );
};

export default Listings;
