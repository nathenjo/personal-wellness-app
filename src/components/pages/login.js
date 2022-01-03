import React, { useState } from 'react';
import Button from '../helpers/button';

export default function Login(props){

  const { setHistoryState, setUser, setLoggedIn } = props;

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailValue, passwordValue);
    setUser({name: "Nathen"})
    setLoggedIn(true);
    setHistoryState(`/account`);
  }

  return(
    <div className='login'>
      <form onSubmit={handleSubmit} className='login__form'>
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
        <Button className='login__button' type='submit' />
      </form>
    </div>
  );
}