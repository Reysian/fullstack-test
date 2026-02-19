import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect running...")
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(`Error fetching data: ${err}`));
  }, []);

  return (
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
      <div>
        <h2>From Server:</h2>
        <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
