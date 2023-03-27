import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Let we see the output of Javascript</h2>
        
      </header>
      <button onClick={window['alertMsg']}>Call</button>
    </div>
  );
}

export default App;
