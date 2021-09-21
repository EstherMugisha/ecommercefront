import './App.css';
import React from 'react';
import Dashboard from "./containers/Dashboard/Dashboard";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Dashboard />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
