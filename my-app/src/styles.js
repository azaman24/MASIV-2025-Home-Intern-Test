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
  padding: "1px 40px",
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
export const introParagraphStyle = {
  fontSize: "18px",
  color: "#333",
  marginTop: "100px",
  marginBottom: "20px",
  textAlign: "center",
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

export const mapPageStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "100vh",
  width: "100%",
  backgroundColor: "#F5F5F5",
};

// Left overlay
export const leftOverlayStyle = {
  position: "absolute",
  left: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};

// Rectangle map container
export const mapContainerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const rectangleMapStyle = {
  width: "600px",
  height: "400px",
  backgroundColor: "#ddd",
  border: "2px solid #aaa",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

// Right overlay (appears when building clicked)
export const rightOverlayStyle = {
  position: "absolute",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  minWidth: "250px",
};