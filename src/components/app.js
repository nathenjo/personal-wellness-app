import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';
import Nav from './nav';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" render = {props => (
              <Home {...props} className='app__home' />
            )} />
          </Switch>
        </Router>
        {/* // Footer */}
      </div>
    );
  }
}
