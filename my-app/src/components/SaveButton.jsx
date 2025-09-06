// src/components/SaveButton.jsx
import React from "react";
import * as styles from "../styles";

function SaveButton({ onClick }) {
  return (
    <button
      style={styles.exploreButtonStyle} // reuse same styling
      onClick={onClick}                 // action passed via prop
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5a800")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFB703")}
    >
      Save
    </button>
  );
}

export default SaveButton;