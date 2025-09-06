// src/styles.js

// Global App style
export const appStyle = {
  margin: 0,
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#F5F5F5",
  color: "#212121",
};

// Header styling
export const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "7.5px 40px",
  backgroundColor: "#75848aff", // Charcoal gray
  color: "#FFFFFF",
  width: "100%",
  boxSizing: "border-box",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

// Logo style
export const logoStyle = {
  height: "50px",
  marginLeft: "15px",
  cursor: "pointer",
};

// Auth button style
export const buttonStyle = {
  padding: "8px 16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#0077B6",
  color: "#FFFFFF",
  fontWeight: "bold",
};

// Hover states for buttons (React handles via inline style or className, see Home.jsx/SignIn.jsx)
export const buttonHoverStyle = {
  backgroundColor: "#005f8a",
};

// Explore button style
export const exploreButtonStyle = {
  padding: "14px 28px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#FFB703",
  color: "#212121",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

// Input boxes (for SignIn)
export const inputStyle = {
  padding: "8px",
  fontSize: "16px",
  marginBottom: "10px",
};

// Back button (for SignIn)
export const backButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  marginTop: "20px",
  backgroundColor: "#ccc",
  cursor: "pointer",
};

// Intro Paragraph
export const introParagraph = {
  marginTop: "200px"
};

// City map placeholder
export const cityMapStyle = {
  marginTop: "100px", // leave space for fixed header
  height: "400px",
  backgroundColor: "#eee",
  borderStyle: "solid",
  borderRadius: "15px",
  marginTop: "100px"
};

// Explore container
export const exploreContainerStyle = {
  marginTop: "20px",
};

// Message style
export const messageStyle = {
  fontSize: "18px",
  color: "#333",
  marginTop: "10px",
};
