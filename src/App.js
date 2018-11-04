import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>SteelSeries Demo</h1>
        </header>
        <div className="container">
          <div className="panel panel-left">
            <h1>This is the Headline On The Left</h1>
          </div>
          <div className="panel panel-right">
            <h1>This is the Headline on the Right</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
