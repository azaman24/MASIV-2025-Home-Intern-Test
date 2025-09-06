import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
const CalgaryScape = './CalgaryScape_Logo.png';
import './App.css';
import * as styles from "./styles";
import TopNavbar from './components/header';
import SignIn from './components/SignIn'; // Import the SignIn component
import My3DScene from './components/My3DScene';
import CalgaryMap from './components/CalgaryMap';

// The Home component with your current UI
function Home() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <div style={styles.appStyle}>
        <header style={styles.headerStyle}>
          <img id="site-logo" src={CalgaryScape} className="logo" alt="CalgaryScape logo" />
          <h1>Explore Calgary</h1>
          <div id="auth-btns">
            {/* Replaced Sign Up / Sign In buttons with one navigation button */}
            <button 
              id="signin-btn" 
              onClick={() => navigate("/signin")}
              style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
            >
              Sign In
            </button>
          </div>
        </header>
      </div>
      {/* <CalgaryMap /> */}
      <p id="intro-paragraph">Explore in 3D. Search smarter. Save what inspires you</p>
      {/* <h2>{message}</h2> */}
      {/* <My3DScene /> */}
      {/* <CalgaryMap /> */}
      <div id="city-map">
        <CalgaryMap />
      </div>
      <div id="explore-container">
        <button id="explore-btn">Explore Map</button>
      </div>
    </>
  );
}

// Main App with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
