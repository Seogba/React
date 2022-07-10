import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function MinutesToHours() {
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

function KmToMiles() {
  return <h3>KM 2 M</h3>;
}

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select Your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
