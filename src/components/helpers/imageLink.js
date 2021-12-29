import React, { useState } from 'react';

export default function ImageLink(props) {

    const { className, setHistoryState, image, imageAlt, path } = props;

       return(
         <div onClick={() => setHistoryState(`/${path}`)} className={`image-link ${className}`}>
            <img src={image} alt={imageAlt} />
         </div>
       );
}