import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './footer';

import Home from './home';
import Nav from './nav';

import Login from "./pages/login";

export default function App() {

  const [route, setRoute] = useState("/");

  const appLinks = ['Login', 'Create Account', 'About', 'Site Map'];

    return (
      <div className='app'>
        <Nav setRoute={setRoute} links={appLinks} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        <Footer setRoute={setRoute} links={appLinks} />
      </div>
    );
}