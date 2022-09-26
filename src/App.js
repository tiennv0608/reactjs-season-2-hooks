import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  let name = "James";

  const handleEventClick = (e) => {
    console.log("Click me!", e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Learn ReactJS with {name}</h2>
        <input
          type="text"
          value="James"
          onClick={(e) => {
            handleEventClick(e);
          }}
        />
        <button
          type="button"
          onClick={(e) => {
            handleEventClick(e);
          }}
        >
          Click me!
        </button>
      </header>
    </div>
  );
};

export default App;
