import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '../styles';

function Home() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("")); // fallback
  }, []);

  return (
    <div style={styles.appStyle}>
      <header style={styles.headerStyle}>
        <img src="/CalgaryScape_Logo.png" alt="CalgaryScape logo" style={styles.logoStyle} />
        <h1>Explore Calgary</h1>
        <button style={styles.buttonStyle} onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </header>

      <p>Explore in 3D. Search smarter. Save what inspires you</p>
      {message && <h2>{message}</h2>}

      <div id="city-map" style={{ marginTop: '20px', height: '400px', backgroundColor: '#eee' }}>
        {/* Placeholder for CalgaryMap or My3DScene */}
      </div>

      <div id="explore-container" style={{ marginTop: '20px' }}>
        <button style={styles.buttonStyle}>Explore Map</button>
      </div>
    </div>
  );
}

export default Home;