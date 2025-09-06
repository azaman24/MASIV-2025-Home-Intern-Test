import { useEffect } from "react";
// import { styleAuthButtons } from "./styles.js"; // adjust path
// import CalgaryScape from '../public/CalgaryScape_Logo.png'

function TopNavbar() {
  useEffect(() => {
    styleAuthButtons(); // run styling after render
  }, []);

  return (
    <header id="site-header">
      <img id="site-logo" src={CalgaryScape} alt="CalgaryScape logo" />
      <div id="auth-buttons">
        <button id="signup-btn">Sign Up</button>
        <button id="signin-btn">Sign In</button>
      </div>
    </header>
  );
}

export default TopNavbar;