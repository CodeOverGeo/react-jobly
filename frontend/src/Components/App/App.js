import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Routing from '../Routes/Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
