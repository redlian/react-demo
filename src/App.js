import logo from './logo.svg';
import './App.css';
import Portal from './context/portal.jsx';
import Menu from './pages/Menu.jsx'

function App() {
  return (
    <>
      <div className='portal'>
        <Portal>
          <Menu />
        </Portal>
      </div>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </>
  );
}

export default App;
