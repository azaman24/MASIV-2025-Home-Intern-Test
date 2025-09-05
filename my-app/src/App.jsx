import { useEffect, useState } from "react";
import CalgaryScape from '../public/CalgaryScape_Logo.png'
import './App.css'
import My3DScene from './components/My3DScene'
import CalgaryMap from './components/CalgaryMap'

// import TestMap from './components/3DMap' DELETE THIS LINE WHEN HOME

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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={CalgaryScape} className="logo" alt="CalgaryScape logo" />
        </a>
              <h1>Explore Calgary</h1>
      </div>
      <h2>{message}</h2>
      {/* <TestMap /> */}
      <CalgaryMap />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
