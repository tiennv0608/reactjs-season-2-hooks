import logo from "./logo.svg";
import "./App.css";

const App = () => {
  let name = "James";
  let year = 2022;
  let link =
    "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9";
  let obj = { name: "James", age: 18 };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Learn ReactJS with {name} in {year}
        </h2>
        <a href={link}>Visit</a>
        <p>{JSON.stringify(obj)}</p>
      </header>
    </div>
  );
};

export default App;
