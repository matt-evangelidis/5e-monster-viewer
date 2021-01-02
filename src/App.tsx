import React from 'react';
import './App.css';
import Monster from './components/Monster';
import { dragon } from './data/dragon';

function App() {
  return (
    <div className="App">
      <Monster {...dragon}/>
    </div>
  );
}

export default App;
