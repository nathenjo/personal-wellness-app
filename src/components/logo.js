import React from 'react';
import LogoImage from '../../static/assets/Personal_Wellness_App_Logo.png'
import { useNavigate } from "react-router-dom";

export default function Logo(props){

  const navigate = useNavigate();

   return(
     <div className='logo' onClick={() => navigate('/', {replace: true})} >
       <img src={LogoImage} />
     </div>
   );
}