import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { Countdown, NewCountDown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching youtube", author: "James" },
    { id: "todo2", title: "Doing homework", author: "James" },
    { id: "todo3", title: "Playing game", author: "Tien" },
    { id: "todo4", title: "Reading book", author: "Tien" },
  ]);

  useEffect(() => {
    console.log("run use effect");
  }, [title]);

  const handleEventClick = () => {
    if (!title) return;
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      author: "James",
    };
    setTodos([...todos, todo]);
    setTitle("");
  };

  const handleOnChangeInput = (e) => {
    setTitle(e.target.value);
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
                value={title}
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
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/add-new-blog">
              <AddNewBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
