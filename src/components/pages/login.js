import React, { useState } from 'react';
import Button from '../helpers/button';
import { useNavigate } from 'react-router-dom';

export default function Login(props){

  const { setUser, setLoggedIn } = props;

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailValue, passwordValue);
    setUser({name: "Nathen"})
    setLoggedIn(true);
    navigate('/account', {replace: true});
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