import React, { useEffect, useState } from 'react';

const RacePostList = () => {
  const [racePosts, setRacePosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/raceposts/')
      .then((response) => response.json())
      .then((data) => setRacePosts(data))
      .catch((error) => console.error('Error fetching race posts:', error));
  }, []);

  return (
    <div className="racepost-grid">
      {racePosts.length > 0 ? (
        racePosts.map((post) => (
          <div className="racepost-card" key={post.id}>
            <h3 className="racepost-title">{post.title}</h3>
            <p className="racepost-details">Distance: {post.distance} km</p>
            <p className="racepost-details">Elevation: {post.elevation} m</p>
            <p className="racepost-date">
              Posted on: {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>Loading race posts...</p>
      )}
    </div>
  );
};

export default RacePostList;
