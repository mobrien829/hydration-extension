import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="goal">Try to drink 8 cups of water each day!</div>

          <div className="glass">
            <div
              className="glass-counter"
              onClick={() => setCounter(counter + 1)}
            >
              {counter}
            </div>
          </div>
          <div className="reset-button" onClick={() => setCounter(0)}>
            Reset
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
