import React from 'react';
import VendingMachine from './VendingMachine';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <VendingMachine />

      </BrowserRouter>
    </div>
  );
}

export default App;
