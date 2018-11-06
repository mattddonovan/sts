import React, { Component } from 'react';
import './App.scss';
import SlideFeature from './components/SlideFeature';
import data from './api/data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredItems: data.posts
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>SteelSeries Demo</h1>
        </header>
        <SlideFeature 
          posts = {this.state.featuredItems}
        />
      </div>
    );
  }
}

export default App;
