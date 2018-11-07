import React, { Component } from 'react';
import './App.scss';
import SlideFeature from './components/SlideFeature';

// Note: this would eventually serve dynamic data from a live RSS / JSON feed.
import data from './api/data.json';

class App extends Component {
  constructor(props) {
    super(props);

    // These are the featured posts we'd pass to the SlideFeature component
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
