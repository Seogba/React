import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <div>
        <h1>Super Converter</h1>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>

      <div>
        <h4>You want to convert {amount}</h4>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="hours"
          type="number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Nuclear</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default App;
