import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";

const App = () => {
  const [name, setName] = useState("James");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching youtube", author: "James" },
    { id: "todo2", title: "Doing homework", author: "James" },
    { id: "todo3", title: "Playing game", author: "Tien" },
    { id: "todo4", title: "Reading book", author: "Tien" },
  ]);

  useEffect(() => {
    console.log("run use effect");
  }, [address]);

  const handleEventClick = () => {
    if (!address) return;
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: address,
      author: "James",
    };
    setTodos([...todos, todo]);
    setAddress("");
  };

  const handleOnChangeInput = (e) => {
    setAddress(e.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Learn ReactJS with {name}</h2>
        <Todo
          todos={todos}
          title={"All todo"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter((item) => item.author === "James")}
          title={`James's todo`}
          deleteDataTodo={deleteDataTodo}
        />
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
