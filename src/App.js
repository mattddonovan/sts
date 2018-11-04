import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>SteelSeries Demo</h1>
        </header>
        <div className="container">
          <div className="panel panel-left">
            <h2>This is the Headline On The Left</h2>
          </div>
          <div className="panel panel-right">
            <h2>This is the Headline on the Right</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
