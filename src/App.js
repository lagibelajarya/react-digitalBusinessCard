import './App.css';
import Info from './component/Info';
import About from './component/About';
import Media from './component/Media';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="container">
        <Info />
        <About />
        <Media />
      </div>
    </div>
  );
}

export default App;
