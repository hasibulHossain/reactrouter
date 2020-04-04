import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/UI/Navigation/Navigation';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <Router hashType="noslash">     
          <div className="App">
            <Navigation />
            <Blog />
          </div>
      </Router>
    );
  }
}

export default App;
