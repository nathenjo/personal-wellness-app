import React, { useState } from 'react';

export default function Footer(props){

    const { links } = props;

   return(
     <div className='footer'>
       <div className='footer__socials'>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
       </div>
       <div className='footer__links'>
        {links.map((link, index) => {
            return <div key={index} className='footer__links__link'>{link}</div>
        })}
       </div>
       <div className='footer__logo'>
        {/* <img src='./assets/chat-app-logo.png' /> */}
       </div>
     </div>
   );
}