import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import DashBoard from './DashBoard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashBoard />
      </div>
    );
  }
}

export default App;
