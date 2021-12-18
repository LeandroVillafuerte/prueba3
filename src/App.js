import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Fusce tincidunt dui ac felis
          ultricies, accumsan porttitor leo molestie. Ut eget odio lorem.
          Aliquam ut ante egestas, imperdiet est eget, mattis metus. Integer nec
          lectus nisi. Proin at nulla magna. Donec accumsan orci eget urna
          mollis tempus. Duis placerat tempus erat eget dapibus.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
