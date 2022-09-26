import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("James");
  const [address, setAddress] = useState("");
  const handleEventClick = () => {
    console.log(address);
    setName(address);
  };

  const handleOnChangeInput = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Learn ReactJS with {name}</h2>
        <input
          type="text"
          value={address}
          onChange={(e) => handleOnChangeInput(e)}
        />
        <button
          type="button"
          onClick={() => {
            handleEventClick();
          }}
        >
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
