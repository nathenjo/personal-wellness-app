import React, { useState } from 'react';

export default function ImageLink(props) {

    const { className, image, imageAlt } = props;

       return(
         <div className={`image-link ${className}`}>
            <img src={image} alt={imageAlt} />
         </div>
       );
}