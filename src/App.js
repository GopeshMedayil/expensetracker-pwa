import React, { Component } from 'react';
import DashBoard from './DashBoard.js';
import Expenses from './Expenses.js';
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/expenses' component={Expenses} />
          {/* <Route path='/schedule' component={Schedule} /> */}
        </Switch>
        {/* <DashBoard /> */}
      </div>
    );
  }

}


export default App;
