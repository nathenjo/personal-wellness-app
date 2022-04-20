import React, { useState, useEffect } from 'react';
import history from './history';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Home from './home';
import Nav from './nav';
import Footer from './footer';
import Login from './pages/login';
import NoPath from './noPath';
import Logo from './logo';
import Account from './pages/account';
import NewAccount from './pages/newAccount';

export default function App(){

    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const links = ['Home', 'Logout', 'Login'];

    useEffect(() => {

    })

   return(
     <div className='app'>
        <BrowserRouter>
        <Logo />
        <Nav loggedIn={loggedIn} />
        <Routes>
          <Route path='/' element={<Home loggedIn={loggedIn} />} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} user={user} setUser={setUser} loggedIn={loggedIn} />} />
          <Route path='/account' element={<Account user={user} loggedIn={loggedIn} />} />
          <Route path="*" element={<NoPath />} />
        </Routes>
        <Footer className='app__footer' />
      </BrowserRouter>
     </div>
   );
}