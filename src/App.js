import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const todaysDate = new Date().toDateString();
  const [localData, setLocalData] = useState();

  const checkLocal = () => {
    if (counter === 0) {
      if (localStorage.getItem("waterGlass")) {
        const dataCounter = JSON.parse(localStorage.getItem("waterGlass"))
          .amount;
        setCounter(dataCounter);
      }
    }
  };

  checkLocal();

  const clickHelper = () => {
    const data = { amount: counter + 1, todaysDate };
    setCounter(counter + 1);
    localStorage.setItem("waterGlass", JSON.stringify(data));
    setLocalData(JSON.parse(localStorage.getItem("waterGlass")));
  };
  const resetHandler = () => {
    localStorage.removeItem("waterGlass");
    setLocalData({});
    setCounter(0);
  };

  const waterStyle = {
    height: `${53 * counter}px`,
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="goal">Try to drink 8 cups of water each day!</div>

          <div className="glass">
            <div className="glass-edge"></div>
            <div className="glass-base"></div>
            <div className="water" style={waterStyle}></div>
            <div className="glass-counter" onClick={clickHelper}>
              {counter}
            </div>
          </div>
          <div className="reset-button" onClick={resetHandler}>
            Reset
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
