import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { Countdown, NewCountDown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  const onTimesup = () => {
    alert("time up");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <Countdown onTimesup={onTimesup} />
              <span>-----------------------------</span>
              <NewCountDown onTimesup={onTimesup} />
            </Route>
            <Route path="/todo">
              <Todo
                todos={todos}
                title={"All todo"}
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
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
