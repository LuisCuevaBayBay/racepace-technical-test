import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RacePostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/raceposts/");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h2>Race Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="race-post-card">
            <div className="race-post-card-header">{post.title}</div>
            <div className="race-post-details">
              <span>Distance: {post.distance} km</span>
              <span>Elevation: {post.elevation} m</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function RacePostForm() {
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [elevation, setElevation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title,
      distance,
      elevation,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/raceposts/', data);
      setTitle('');
      setDistance('');
      setElevation('');
      console.log('Race post created:', response.data);
    } catch (err) {
      console.error('Error creating race post:', err);
      setError('Failed to create a race post');
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Race Post</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Race title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Distance (in km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Elevation (in meters)"
          value={elevation}
          onChange={(e) => setElevation(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Post Race
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <RacePostForm />
      <RacePostList />
    </div>
  );
}

export default App;
