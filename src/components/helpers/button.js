import React, { useState } from 'react';

export default function Button(props){

    const {className, type} = props;

   return(
     <button type={type} className={`button ${className}`}>
       <i className="fas fa-arrow-right"></i>
     </button>
   );
}