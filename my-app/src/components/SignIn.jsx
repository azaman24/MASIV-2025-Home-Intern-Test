// src/components/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../styles";

function SignIn() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) {
      alert("Please enter a username or create one.");
    } else {
      alert(`Logged in as ${username}`);
    }
  };

  const handleCreateUsername = () => {
    const newUsername = prompt("Enter a new username:");
    if (newUsername) setUsername(newUsername);
  };

  return (
    <div style={styles.appStyle}>
      {/* Header */}
      <header style={styles.headerStyle}>
        <img src="/CalgaryScape_Logo.png" alt="Logo" style={styles.logoStyle} />
        <h1>Sign In</h1>
      </header>

      {/* Centered Sign In Form */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "150px", // Leave space for fixed header
        gap: "15px"
      }}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
        <button
          style={styles.buttonStyle}
          onClick={handleLogin}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#005f8a"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0077B6"}
        >
          Login
        </button>
        <button
          style={styles.buttonStyle}
          onClick={handleCreateUsername}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#005f8a"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0077B6"}
        >
          Create Username
        </button>
        <button
          style={styles.backButtonStyle}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SignIn;
