import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import My3DScene from './components/My3DScene'
// import CalgaryMap from './components/CalgaryMap'
import Calgary3DBuildings from './components/CalgaryMap'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <h1>City Dashboard</h1>
      <h2>{message}</h2>
      <h3 style={{ margin: 8, textAlign: "center" }}>Calgary Boundary Map</h3>

      <Calgary3DBuildings />
      {/* <CalgaryMap /> */}
      {/* <My3DScene /> */}
    </>
  )
}

export default App
