import React, { useEffect, useState } from 'react';

export default function Nav(props) {

    const {loggedIn, links} = props;

    const [clicked, setClicked] = useState(false);
    const [showDropdown, setShowDropdown] = useState({transform: "translateX(-120px)"});

    useEffect(() => {
        if (clicked) {
            setShowDropdown({transform: "translateX(50px)"})
        } else {
            setShowDropdown({transform: "translateX(-120px)"})
        }
    }, [clicked, loggedIn])

    return(
        <div className='nav'>
        <i onClick={() => setClicked(!clicked)} className="fas fa-caret-right"></i>
        {/* <div style={showDropdown} className='nav__dropdown'>
            {links.map((link, index) => {
                if (link == "Logout") {
                    return <div key={index} className='nav__dropdown__link'>{link}</div>
                } else {
                    return <div key={index} className='nav__dropdown__link'>{link}</div>
                }
            })}
        </div> */}
        </div>
    );
}