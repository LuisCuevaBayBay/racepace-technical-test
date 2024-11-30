// Ensure imports are at the top
import React, { useState } from 'react';

const RacePostForm = ({ onPostCreated }) => {
  // Your form logic here
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [elevation, setElevation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevents the form from submitting the default way
    console.log('Form submitted');
  
    const newRacePost = {
      title,
      distance,
      elevation,
    };
  
    try {
      const response = await fetch('http://localhost:8000/api/raceposts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRacePost),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create a race post');
      }
  
      // Call the onPostCreated function passed as a prop
      onPostCreated(newRacePost);
  
      // Reset form fields
      setTitle('');
      setDistance('');
      setElevation('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create race post');
    }
  };
  
  return (
    <div className="container my-5">
    <h2>Create a Race Post</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Race Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="distance" className="form-label">Distance (km)</label>
        <input
          type="number"
          className="form-control"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="elevation" className="form-label">Elevation (m)</label>
        <input
          type="number"
          className="form-control"
          id="elevation"
          value={elevation}
          onChange={(e) => setElevation(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit Race Post</button>
    </form>
  </div>
  );
};

export default RacePostForm;
