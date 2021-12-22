import React, { useEffect, useState } from 'react';

export default function Nav(props) {

    const [clicked, setClicked] = useState(false);
    const [showDropdown, setShowDropdown] = useState({transform: "translateX(-120px)"});

    useEffect(() => {
        if (clicked) {
            setShowDropdown({transform: "translateX(50px)"})
        } else {
            setShowDropdown({transform: "translateX(-120px)"})
        }
    }, [clicked])

       return(
         <div className='nav'>
            <i onClick={() => setClicked(!clicked)} className="fas fa-caret-right"></i>
            <div style={showDropdown} className='nav__dropdown'>
                <div>Login</div>
                <div>Create Account</div>
                <div>About</div>
                <div>Site Map</div>
            </div>
         </div>
       );
}