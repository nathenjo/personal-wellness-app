import React, { useState, useEffect } from 'react';
import history from './history';

import Home from './home';
import Nav from './nav';
import Footer from './footer';
import Login from './pages/login';
import NoPath from './noPath';
import Logo from './logo';
import Account from './pages/account';

export default function App(){

    const [historyState, setHistoryState] = useState(history.location.pathname);
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        history.push(historyState);
        if (loggedIn) {
            links.push('Logout')
        } else {
            links.filter(word => word == 'Logout')
        }
    })

    const links = ["Login", "Create Account", "About", "Site Map"];

    const renderPages = () => {
        if (historyState == '/') {
            return <Home setHistoryState={setHistoryState} />
        } else if (historyState == '/login') {
            return <Login setLoggedIn={setLoggedIn} setUser={setUser} setHistoryState={setHistoryState} />
        } else if (historyState == '/account') {
            return <Account setHistoryState={setHistoryState} user={user} />
        } else {
            return <NoPath />
        }
    }

   return(
     <div className='app'>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setHistoryState={setHistoryState} links={links} />
        <Logo setHistoryState={setHistoryState} />
        {renderPages()}
        <Footer links={links} />
     </div>
   );
}