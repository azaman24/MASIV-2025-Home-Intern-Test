// src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
const CalgaryScape = './CalgaryScape_Logo.png';
import './App.css';
import * as styles from "./styles";
import SignIn from './components/SignIn';
import Map from "./pages/Map";

function Home() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={styles.appStyle}>
      {/* Header */}
      <header style={styles.headerStyle}>
        <img id="site-logo" src={CalgaryScape} className="logo" alt="CalgaryScape logo" />
        <h1>Explore Calgary</h1>
        <div id="auth-btns">
          <button
            id="signin-btn"
            onClick={() => navigate("/signin")}
            style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Intro paragraph with fixed visibility */}
      <p
        id="intro-paragraph"
        style={{
          ...styles.introParagraphStyle,
          marginTop: "40px",
          marginBottom: "10px",
          paddingTop: "30px",
          paddingBottom: "-20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
          color: "#333",   // make sure it's visible
          display: "block"
        }}
      >
        Explore in 3D. Search smarter. Save what inspires you.
      </p>

      {/* Main content container centered */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",   // vertically center
          marginTop: "40px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "80vh",
            width: "85vw",
            margin: "0 auto", // horizontally center
          }}
        >
          {/* Left Overlay */}
          <div
            style={{
              width: "20%",
              padding: "20px",
              backgroundColor: "rgba(245, 245, 245, 0.9)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3>Location</h3>
            <input
              type="text"
              placeholder="Search location..."
              style={{
                padding: "10px",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <p>Click on a building for more information.</p>
          </div>

          {/* Map in the center */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ width: "80%", borderRadius: "5%", overflow: "hidden" }}>
              <iframe
                src="https://maps.calgary.ca/3ddigitalcalgary/"
                width="100%"
                height="80%"
                style={{ border: "none"}}
                title="Calgary 3D Map"
              ></iframe>
            </div>
          </div>

          {/* Right Overlay */}
          <div
            style={{
              width: "20%",
              padding: "20px",
              backgroundColor: "rgba(245, 245, 245, 0.9)",
            }}
          >
            <h3>Building Info</h3>
            <p>Select a building to see details.</p>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            marginTop: "-50px",
            backgroundColor: "#FFB703",
            border: "none",
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5a800")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFB703")}
        >
          Save
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;