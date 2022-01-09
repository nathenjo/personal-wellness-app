import React, { useEffect, useState } from 'react';
import Button from '../helpers/button';

export default function NewAccount(props){
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New account form submitted');
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [style, setStyle] = useState({display: "none"});

    const showContent = () => {
      if (name == '') {
        setStyle({dispaly: "none"})
      } else {
        setStyle({display: "block"})
      }
    }

    useEffect(() => {
      if (name == '') {
        setStyle({display: "none"})
      } else {
        setStyle({display: "block"})
      }
    }, [name])

   return(
     <form className='new-account' onSubmit={handleSubmit}>
       <label className='new-account__label-name'>Name</label>
       <input
        className='new-account__input-name'
        type='text'
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       />

       <label style={style} className='new-account__label-email'>Email</label>
       <input
        style={style}
        className='new-account__input-email'
        type='email'
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />

       <label style={style} className='new-account__label-password'>Password</label>
       <input
        style={style}
        className='new-account__input-password'
        type='password'
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
       />

       <label style={style} className='new-account__label-confirm-password'>Confirm Password</label>
       <input
        style={style}
        className='new-account__input-confirm-password'
        type='password'
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
       />
       <Button className='new-account__button' type='submit' />
     </form>
   );
}