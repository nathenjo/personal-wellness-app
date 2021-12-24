import React, { useState, useEffect } from 'react';
import history from './history';

import Home from './home';
import Nav from './nav';
import Footer from './footer';
import Login from './pages/login';
import NoPath from './noPath';
import Logo from './logo';

export default function App(){

    const [historyState, setHistoryState] = useState(history.location.pathname);

    useEffect(() => {
        history.push(historyState);
    })

    const links = ["Login", "Create Account", "About", "Site Map"];

    const renderPages = () => {
        if (historyState == '/') {
            return <Home setHistoryState={setHistoryState} />
        } else if (historyState == '/login') {
            return <Login />
        } else {
            return <NoPath />
        }
    }

   return(
     <div className='app'>
        <Nav setHistoryState={setHistoryState} links={links} />
        <Logo setHistoryState={setHistoryState} />
        {renderPages()}
        <Footer links={links} />
     </div>
   );
}