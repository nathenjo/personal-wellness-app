import React, { useState } from 'react';

export default function Footer(props){

   return(
     <div className='footer'>
       <div className='footer__socials'>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
       </div>
       <div className='footer__links'>
        Links
       </div>
       <div className='footer__logo'>
        {/* <img src='./assets/chat-app-logo.png' /> */}
       </div>
     </div>
   );
}