import React from 'react';
import LogoImage from '../../static/assets/Personal_Wellness_App_Logo.png'

export default function Logo(props){

    const {setHistoryState} = props;
   return(
     <div className='logo' onClick={() => setHistoryState('/')} >
       <img src={LogoImage} />
     </div>
   );
}