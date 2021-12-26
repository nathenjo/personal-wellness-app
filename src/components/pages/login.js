import React, { useState } from 'react';
import Button from '../helpers/button';

export default function Login(props){

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return(
    <div className='login'>
      <form className='login__form'>
        <label className='email-label'>Email</label>
        <input
          type="email" 
          className='email-input'
          placeholder='Email'
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
        />
        <label className='password-label'>Password</label>
        <input
          type="password"
          className='password-input'
          placeholder='Password'
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
        />
        <Button className='login__button' type='' onSubmit='' />
      </form>
    </div>
  );
}