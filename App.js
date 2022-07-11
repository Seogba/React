import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function Btn({ text, changeValue }) {
  console.log(text, "was rendered");
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "pink",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
}

function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <Btn text={value} changeValue={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}

export default App;
