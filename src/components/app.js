import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './footer';

import Home from './home';
import Nav from './nav';

export default function App() {

  const appLinks = ['Login', 'Create Account', 'About', 'Site Map'];

    return (
      <div className='app'>
        <Nav links={appLinks} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer links={appLinks} />
      </div>
    );
}