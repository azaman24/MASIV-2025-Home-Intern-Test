// src/components/ExploreButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "../styles";

function ExploreButton() {
  const navigate = useNavigate();

  return (
    <button
      style={styles.exploreButtonStyle}
      onClick={() => navigate("/map")}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5a800")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFB703")}
    >
      Explore
    </button>
  );
}

export default ExploreButton;