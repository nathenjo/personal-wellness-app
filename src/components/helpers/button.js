import React, { useState } from 'react';

export default function Button(props){

    const {className, type, onSubmit} = props;

   return(
     <button type={type} onSubmit={onSubmit} className={`button ${className}`}>
       <i className="fas fa-arrow-right"></i>
     </button>
   );
}