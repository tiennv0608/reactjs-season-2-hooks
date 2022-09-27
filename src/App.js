import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

const App = () => {
  const [name, setName] = useState("James");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching youtube" },
    { id: "todo2", title: "Doing homework" },
    { id: "todo3", title: "Playing game" },
  ]);

  const handleEventClick = () => {
    if (!address) return;
    let todo = {
      id: Math.floor(Math.random()) * 10000,
      title: address,
    };
    setTodos([...todos, todo]);
    setAddress("");
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
        <Todo todos={todos} />
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
