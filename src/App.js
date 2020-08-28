import React from 'react';
import './App.css';
import { Detail } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Kanbanuli Loaders
        </h1>
      </header>

      <Detail />

      <footer className="App-footer">
        Developed by Ulises Torner 2020
      </footer>
    </div>
  );
}

export default App;
