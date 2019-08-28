import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chance from"chance"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> This is a change that I made </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
<h3> Hello {Chance.first()} </h3>
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
  );
}

export default App;
