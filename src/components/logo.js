import React from 'react';
import LogoImage from '../../static/assets/personal-wellness-app-logo.png'

export default function Logo(props){

    const {setHistoryState} = props;
   return(
     <div className='logo' onClick={() => setHistoryState('/')} >
       <img src={LogoImage} />
     </div>
   );
}